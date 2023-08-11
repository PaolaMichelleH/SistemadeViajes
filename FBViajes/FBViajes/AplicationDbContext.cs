using FBViajes.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Data.Entity.Core.Metadata.Edm;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Infrastructure.Pluralization;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Threading.Tasks;
using DbContext = Microsoft.EntityFrameworkCore.DbContext;

namespace FBViajes
{
  public class AplicationDbContext: DbContext
  {
      //protected override void OnModelCreating(ModelBuilder modelBuilder)
     // {
        //base.OnModelCreating(modelBuilder);
        //modelBuilder.Entity<Colaboradores>().ToTable("Colaboradores");
        //modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
      //}

    public Microsoft.EntityFrameworkCore.DbSet<Colaboradores> Colaboradores { get; set; }
    //public class PluralizingTableNameConvention : IStoreModelConvention<System.Data.Entity.Core.Metadata.Edm.EntityType>
    //{
    
    public void Apply(EntityType item, DbModel model)
      {
        throw new NotImplementedException();
      }
    //}

    public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
    {

    }
  }
}
