using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Services
{
    public interface IUserService
    {
        AppUser GetUserDetails(string associateID);
        IEnumerable<AppUser> SearchUserDetails(int key);
        IEnumerable<AppRole> GetUserRoles(int roleID);
        IEnumerable<BasicFilter> GetUserBasicFilter(int userID, int roleID);
    }
}
