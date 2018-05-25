using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AngularTest.Models;

namespace AngularTest.Controllers
{
    public class PersonController : Controller
    {
        // GET: Person
        private Context db = null;
        public PersonController()
        {
            db = new Context();
        }

        [HttpPost]
        public JsonResult AddPerson(Person person)
        {
            db.persons.Add(person);
            db.SaveChanges();
            return Json(new { status = "Player Added Succefully" });
        }

        [HttpGet]
        public JsonResult GetPerson()
        {
            List<Person> personsList = db.persons.ToList();
            return Json(new { list = personsList }, JsonRequestBehavior.AllowGet);
        }

       

    }
}