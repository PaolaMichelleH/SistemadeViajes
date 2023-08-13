using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FBViajes.Models
{
  public class Asignaciones
  {
    [Key] public int Id { get; set; }
    [Required]
    public string? Fecha { get; set; }
    [Required]
    public decimal Distancia { get; set; }
    [Required]
    public string? Usuario { get; set; }
    [Required]
    public int IdColaborador { get; set; }
    public int SucursalId { get; set; }
    public Colaboradores Colaboradores { get; set; }
    public Sucursales Sucursales { get; set; }
  }
}
