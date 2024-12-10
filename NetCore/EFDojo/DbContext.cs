namespace EFDojo;

using EFDojo.models;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<Order> Orders { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Order>()
            .Property(o => o.OrderId)
            .HasConversion(
                v => v.ToString(),
                v => Ulid.Parse(v));

        modelBuilder.Entity<Product>()
            .Property(p => p.ProductId)
            .HasConversion(
                v => v.ToString(),
                v => Ulid.Parse(v));
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        // Specify the folder and file name for the SQLite database
        //var databaseFolder = Path.Combine(Directory.GetCurrentDirectory(), "Data");
        var databaseFolder = Path.Combine(AppContext.BaseDirectory, "..", "..", "..", "Data");
        Directory.CreateDirectory(databaseFolder); // Ensure the folder exists
        var databasePath = Path.Combine(databaseFolder, "app.db");

        optionsBuilder.UseSqlite($"Data Source={databasePath}");

        if (File.Exists(databasePath))
        {
            File.Delete(databasePath);
        }
    }


}


