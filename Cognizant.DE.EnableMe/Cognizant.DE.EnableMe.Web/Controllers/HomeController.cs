using Cognizant.DE.EnableMe.Entities;
using Cognizant.DE.EnableMe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Cognizant.DE.EnableMe.Web.Controllers
{
    public class HomeController : Controller
    {
        IUserService userService;
        public HomeController()
        {
            userService = new UserService();
        }
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            ViewData["User"] = userService.GetUserDetails("439966");
            return View();
        }
    }
}
