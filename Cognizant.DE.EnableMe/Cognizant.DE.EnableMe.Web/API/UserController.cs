using Cognizant.DE.EnableMe.Entities;
using Cognizant.DE.EnableMe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Cognizant.DE.EnableMe.Web.API
{
    [RoutePrefix("api/user")]
    public class UserController : ApiController
    {
        IUserService userService;
        public UserController()
        {
            userService = new UserService();
        }
        [Route("profile")]
        public AppUser GetUserProfile(int id)
        {
            return userService.GetUserDetails(id.ToString());
        }
        [Route("roles")]
        public IEnumerable<AppRole> GetUserRoles(int id)
        {
            return userService.GetUserRoles(id.ToString());
        }
        [Route("basicfilter")]
        public IEnumerable<BasicFilter> GetUserBasicFilter(int id, int roleID)
        {
            return userService.GetUserBasicFilter(id.ToString(),roleID);
        }
    }
}
