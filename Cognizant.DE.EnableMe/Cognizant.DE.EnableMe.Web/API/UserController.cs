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
        [Route("search")]
        public HttpResponseMessage GetSearchUser(int key)
        {
            return Request.CreateResponse<IEnumerable<AppUser>>(HttpStatusCode.OK,userService.SearchUserDetails(key));
        }
        [Route("roles")]
        public HttpResponseMessage GetUserRoles(int roleID)
        {
            return Request.CreateResponse<IEnumerable<AppRole>>(HttpStatusCode.OK, userService.GetUserRoles(roleID));
        }
        [Route("basicfilter")]
        [HttpGet]
        public HttpResponseMessage GetUserBasicFilter(int userID, int roleID)
        {
            return Request.CreateResponse<IEnumerable<BasicFilter>>(HttpStatusCode.OK, userService.GetUserBasicFilter(userID,roleID));
        }
        [Route("filterdata")]
        [HttpPost]
        public HttpResponseMessage LoadUserDataByFilter(FilterInput filterInput)
        {
            return Request.CreateResponse<string>(HttpStatusCode.OK, "test");
        }
    }
}
