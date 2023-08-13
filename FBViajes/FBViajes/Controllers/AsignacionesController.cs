using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FBViajes.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AsignacionesController : ControllerBase
  {
    private readonly AplicationDbContext _context;

    public AsignacionesController(AplicationDbContext context)
    {
      _context = context;
    }

    // GET: api/<Asignaciones>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listAsignaciones = await _context.Asignaciones.ToListAsync();
        return Ok(listAsignaciones);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


    // POST api/<Asignaciones>
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

  }
}
