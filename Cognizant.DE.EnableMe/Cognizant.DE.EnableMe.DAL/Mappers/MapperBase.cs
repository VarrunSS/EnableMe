using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.Mappers
{
    public abstract class MapperBase : IMapper
    {
        public abstract IEnumerable<IEntity> ToEntities(DataTable dataTable);

        protected object GetFieldValue<T>(DataRow row, string fieldName)
        {
            object t = default(T);
            string typeName = typeof(T).Name.ToLower();
            if (row != null && row.Table.Columns.Contains(fieldName)
                && row[fieldName] != DBNull.Value)
            {
                switch (typeName)
                {
                    case "int34":
                        t = row[fieldName] != null ? Convert.ToInt32(row[fieldName]) : 0;
                        break;
                    case "int64":
                        t = row[fieldName] != null ? Convert.ToInt64(row[fieldName]) : 0;
                        break;
                    case "datetime":
                        t = row[fieldName] != null ? Convert.ToDateTime((row[fieldName].ToString())) : new DateTime();
                        break;
                    default:
                        t = row[fieldName] != null ? (T)row[fieldName] : default(T);
                        break;
                }
                
            }

            return t;
        }
    }
}
