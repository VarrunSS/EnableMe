using Cognizant.DE.EnableMe.Entities;
using Cognizant.DE.EnableMe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
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
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(filterInput);
            string hash = GetMd5Hash(json);
            return Request.CreateResponse<string>(HttpStatusCode.OK, hash);
        }
        static string GetMd5Hash(string input)
        {
            using (MD5 md5Hash = MD5.Create())
            {
                // Convert the input string to a byte array and compute the hash.
                byte[] data = md5Hash.ComputeHash(Encoding.UTF8.GetBytes(input));

                // Create a new Stringbuilder to collect the bytes
                // and create a string.
                StringBuilder sBuilder = new StringBuilder();

                // Loop through each byte of the hashed data 
                // and format each one as a hexadecimal string.
                for (int i = 0; i < data.Length; i++)
                {
                    sBuilder.Append(data[i].ToString("x2"));
                }

                // Return the hexadecimal string.
                return sBuilder.ToString();
            }
        }

        // Verify a hash against a string.
        static bool VerifyMd5Hash(string input, string hash)
        {
            // Hash the input.
            string hashOfInput = GetMd5Hash(input);

            // Create a StringComparer an compare the hashes.
            StringComparer comparer = StringComparer.OrdinalIgnoreCase;

            if (0 == comparer.Compare(hashOfInput, hash))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
