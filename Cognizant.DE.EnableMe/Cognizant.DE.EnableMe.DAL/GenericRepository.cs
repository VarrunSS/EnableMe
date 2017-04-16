using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;
using Cognizant.DE.EnableMe.DAL.SQL;
using Cognizant.DE.EnableMe.DAL.Mappers;
using Cognizant.DE.EnableMe.Entities;

namespace Cognizant.DE.EnableMe.DAL
{
    public abstract class GenericRepository<TEntity> where TEntity : class, IEntity, new()
    {

        public GenericRepository()
        {
        }
        protected IEnumerable<TEntity> Get(string query, IDictionary<string, object> paramaters, bool isProcedure)
        {
            IEnumerable<TEntity> entities = default(IEnumerable<TEntity>);
            using (SqlHelper sqlHelper = new SqlHelper())
            {
                DataTable dt = sqlHelper.Fetch(query, paramaters,isProcedure);
                entities = dt.MapTo<TEntity>();
            }

            return entities;
        }

        protected void Change(string query, IDictionary<string, object> paramaters, bool isProcedure)
        {
            using (SqlHelper sqlHelper = new SqlHelper())
            {
                sqlHelper.Change(query, paramaters,isProcedure);
            }
        }

    }
}
