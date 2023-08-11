using FBViajes.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FBViajes.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ColaboradoresController : ControllerBase
  {
    private readonly AplicationDbContext _context;
    public ColaboradoresController(AplicationDbContext context)
    {
      _context= context;
    }
    // GET: api/<ColaboradoresController>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listColaboradores = await _context.Colaboradores.ToListAsync();
        return Ok(listColaboradores);
      }
      catch (Exception ex) 
      {
        return BadRequest(ex.Message);
      }
    }

    // POST api/<ColaboradoresController>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Colaboradores colaborador)
    {
      try
      {
        _context.Add(colaborador);
        await _context.SaveChangesAsync();
        return Ok(colaborador);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // PUT api/<ColaboradoresController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<ColaboradoresController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
