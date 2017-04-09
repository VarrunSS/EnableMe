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
        public IEnumerable<BasicFilter> Get(string associateID, int roleID)
        {
            IEnumerable<BasicFilter> result = new List<BasicFilter>();
            string query = @"select 
                            p.GroupName,
                            p.BUName,
                            p.SBUName,
                            p.VerticalName,
                            Case when p.HorizontalName='NULL' then p.VerticalName
                            else p.HorizontalName end as PracticeName,
                            p.SubVerticalName,
                            p.ParentAccountName,
                            p.AccountName
                            from ProjectRoleMapping as pr
                            join Projects$ p
                            on pr.ProjectID=p.ESAProjectID
                            join BasicFilterSettings as b
                            on b.ID=pr.BasicFilterKey
                            where AssociateID=@associateID
                            and RoleID=@roleID";
            IDictionary<string, object> paramaters= new Dictionary<string, object>();
            paramaters.Add("associateID",associateID);
            paramaters.Add("roleID", roleID);
            result = Get(query, paramaters);
            return result;
        }
    }
}
