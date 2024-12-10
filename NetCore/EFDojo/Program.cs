using EFDojo.models;
using EFDojo;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Ensure database is created
        await context.Database.EnsureDeletedAsync(); // For testing, deletes the DB on each run
        await context.Database.EnsureCreatedAsync();

        // Add sample data
        if (!await context.Products.AnyAsync())
        {
            Product a = new Product { Name = "Widget", Price = 9.99m, Desc = "not defined" };

            context.Products.AddRange(
                new Product { Name = "Gadget", Price = 19.99m, Desc = "gadget dedscription" },
                a
            );
            
            if (!await context.Orders.AnyAsync())
            {
                context.Orders.AddRange(
                    new Order { Code = "dsaejiopj3423", OrderProduct = a});
            }

            await context.SaveChangesAsync();
        }

        // Query and display data
        var products = await context.Products.ToListAsync();
        Console.WriteLine("Products in the database:");
        foreach (var product in products)
        {
            Console.WriteLine($"- {product.Name}: ${product.Price}: {product.Desc}");
        }
    }
}