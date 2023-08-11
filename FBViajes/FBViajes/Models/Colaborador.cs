using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FBViajes.Models
{
  public class Colaboradores
  {
    public int Id { get; set; }
    [Required]
    public string? Name { get; set; }
    [Required]
    public string? Direccion { get; set; }
    [Required]
    public int Telefono { get; set; }
   
  }
}
