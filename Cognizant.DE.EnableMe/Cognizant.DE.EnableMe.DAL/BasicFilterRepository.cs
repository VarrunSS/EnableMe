using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL
{
    public class BasicFilterRepository : GenericRepository<BasicFilter>, IBasicFilterRepository
    {
        public IEnumerable<BasicFilter> Get(int userID, int roleID)
        {
            IEnumerable<BasicFilter> result = new List<BasicFilter>();
            string query = "uspGetBasicFilters";
            IDictionary<string, object> paramaters= new Dictionary<string, object>();
            paramaters.Add("userID", userID);
            paramaters.Add("roleID", roleID);
            result = Get(query, paramaters,true);
            return result;
        }
    }
}
