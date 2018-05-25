using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularTest.Models
{
    public class Context :DbContext
    {
        public DbSet<Person> persons { get; set; }
    }
}