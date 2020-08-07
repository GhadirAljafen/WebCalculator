using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebCalculator.Controllers
{
    public class CalculatorController : Controller
    {
    
        public ActionResult Calculator() {
            return View();
        }
    }
}