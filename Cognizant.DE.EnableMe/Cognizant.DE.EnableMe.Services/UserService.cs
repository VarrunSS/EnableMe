using Cognizant.DE.EnableMe.DAL;
using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Services
{
    public class UserService :IUserService
    {
        IAppUserRepository appUserRepository;
        IAppRoleRepository appRoleRepository;
        IBasicFilterRepository basicFilterRepository;
        public UserService()
        {
            appUserRepository = new AppUserRepository();
            appRoleRepository = new AppRoleRepository();
            basicFilterRepository = new BasicFilterRepository();
        }

        public AppUser GetUserDetails(string associateID)
        {
            return appUserRepository.Get(associateID);
        }
        public IEnumerable<AppUser> SearchUserDetails(int key)
        {
            return appUserRepository.Search(key);
        }

        public IEnumerable<AppRole> GetUserRoles(int roleID)
        {
            return appRoleRepository.Get(roleID);
        }


        public IEnumerable<BasicFilter> GetUserBasicFilter(int userID, int roleID)
        {
            return basicFilterRepository.Get(userID, roleID);
        }
    }
}
