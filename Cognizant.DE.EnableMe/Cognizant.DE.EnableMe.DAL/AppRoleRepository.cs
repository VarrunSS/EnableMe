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
        public IEnumerable<AppRole> Get(string associateID)
        {
            IEnumerable<AppRole> result = new List<AppRole>();
            string query = @"select 
                            Distinct
                            ar.ID as RoleID,
                            ar.RoleName
                            from ProjectRoleMapping as pr
                            join AppRoles ar
                            on pr.RoleID=ar.ID
                            where AssociateID=@AssociateID;
                            ";
            IDictionary<string, object> paramaters= new Dictionary<string, object>();
            paramaters.Add("AssociateID",associateID);
            result = Get(query, paramaters);
            return result;
        }
    }
}
