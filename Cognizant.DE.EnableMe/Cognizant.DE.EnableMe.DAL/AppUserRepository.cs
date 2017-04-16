using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL
{
    public class AppUserRepository : GenericRepository<AppUser>, IAppUserRepository
    {
        public AppUser Get(string associateID)
        {
            IEnumerable<AppUser> result = new List<AppUser>();
            string query = "uspGetAssociateDetail";
            IDictionary<string, object> paramaters= new Dictionary<string, object>();
            paramaters.Add("AssociateID",associateID);
            result = Get(query, paramaters,true);
            return result.FirstOrDefault();
        }
        public IEnumerable<AppUser> Search(int key)
        {
            IEnumerable<AppUser> result = new List<AppUser>();
            string query = "uspSearchAssociateDetail";
            IDictionary<string, object> paramaters = new Dictionary<string, object>();
            paramaters.Add("key", key);
            result = Get(query, paramaters, true);
            return result;
        }
    }
}
