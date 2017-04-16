using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.Mappers
{
    public class AppUserMapper : MapperBase
    {
        public override IEnumerable<IEntity> ToEntities(DataTable dataTable)
        {
            if (dataTable == null)
            {
                throw new ArgumentNullException("dataTable");
            }

            IEnumerable<AppUser> result = new List<AppUser>();

            result = dataTable.AsEnumerable().Select<DataRow, AppUser>(r =>
            {
                return new AppUser()
                {
                    ID = (int)GetFieldValue<int>(r, "ID"),
                    EmployeeID = (string)GetFieldValue<string>(r, "EmployeeID"),
                    Name = (string)GetFieldValue<string>(r, "Name"),
                    RoleID = (int)GetFieldValue<int>(r, "RoleID")
                };
            });

            return result;
        }
    }
}
