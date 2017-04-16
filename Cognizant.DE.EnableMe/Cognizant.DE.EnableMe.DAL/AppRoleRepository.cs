using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL
{
    public class AppRoleRepository : GenericRepository<AppRole>,IAppRoleRepository
    {
        public IEnumerable<AppRole> Get(int roleID)
        {
            IEnumerable<AppRole> result = new List<AppRole>();
            string query = "upsGetRoles";
            IDictionary<string, object> paramaters= new Dictionary<string, object>();
            paramaters.Add("roleID", roleID);
            result = Get(query, paramaters,true);
            return result;
        }
    }
}
