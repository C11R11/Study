using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFDojo.models;

public class Product
{
    public Ulid ProductId { get; set; }

    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Desc { get; set; } = string.Empty;
}
