using System.ComponentModel.DataAnnotations;

namespace FBViajes.Models
{
  public class Sucursales
  {
    [Key] public int Id { get; set; }
    [Required]
    public string? Nombre { get; set; }
    [Required]
    public string? Direccion { get; set; }
    
   
  }
}
