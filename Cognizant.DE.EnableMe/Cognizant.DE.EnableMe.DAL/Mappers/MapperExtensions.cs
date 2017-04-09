using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.Mappers
{
    public static class MapperExtensions
    {
        public static IEnumerable<TEntity> MapTo<TEntity>(this DataTable dataTable)
            where TEntity : class, IEntity, new()
        {
            IEnumerable<TEntity> entities = default(IEnumerable<TEntity>);

            IMapper mapper = MapperFactory.Instance.GetMapper<TEntity>();
            entities = (IEnumerable<TEntity>)mapper.ToEntities(dataTable);

            return entities;
        }
    }
}
