using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.Mappers
{
    public class AppRoleMapper : MapperBase
    {
        public override IEnumerable<IEntity> ToEntities(DataTable dataTable)
        {
            if (dataTable == null)
            {
                throw new ArgumentNullException("dataTable");
            }

            IEnumerable<AppRole> result = new List<AppRole>();

            result = dataTable.AsEnumerable().Select<DataRow, AppRole>(r =>
            {
                return new AppRole()
                {
                    ID = (int)GetFieldValue<int>(r, "ID"),
                    Name = (string)GetFieldValue<string>(r, "Name")
                };
            });

            return result;
        }
    }
}
