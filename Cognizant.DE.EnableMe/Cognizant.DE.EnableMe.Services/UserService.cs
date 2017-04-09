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

        public IEnumerable<AppRole> GetUserRoles(string associateID)
        {
            return appRoleRepository.Get(associateID);
        }


        public IEnumerable<BasicFilter> GetUserBasicFilter(string associateID, int roleID)
        {
            return basicFilterRepository.Get(associateID, roleID);
        }
    }
}
