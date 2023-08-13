using Microsoft.AspNetCore.Mvc;
using FBViajes.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FBViajes.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SucursalesController : ControllerBase
  {
    private readonly AplicationDbContext _context;

    public SucursalesController(AplicationDbContext context)
    {
      _context = context;
    }

    // GET: api/<SucursalesController>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listSucursales = await _context.Sucursales.ToListAsync();
        return Ok(listSucursales);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


    // POST api/<SucursalesController>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Sucursales sucursales)
    {
      try
      {
        _context.Add(sucursales);
        await _context.SaveChangesAsync();
        return Ok(sucursales);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


  }
}
