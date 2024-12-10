using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFDojo.models;
public class Order
{
    public Ulid OrderId { get; set; }
    public string Code { get; set; } = string.Empty;
    public Product OrderProduct { get; set; } = new Product();
    public int ProductId { get; set; }  
}

