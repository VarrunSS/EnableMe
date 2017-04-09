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
            AppUser appUser = userService.GetUserDetails("439966");
            IEnumerable<AppRole> appRole = userService.GetUserRoles("439966");
            return View();
        }
    }
}
