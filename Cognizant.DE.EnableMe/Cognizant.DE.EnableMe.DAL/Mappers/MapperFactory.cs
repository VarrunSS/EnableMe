using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.Mappers
{
    public class MapperFactory
    {
        private static MapperFactory _instance = null;

        private MapperFactory()
        {

        }

        public static MapperFactory Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new MapperFactory();
                }

                return _instance;
            }
        }

        public IMapper GetMapper<TEntity>() where TEntity : class, IEntity, new()
        {
            string typeName=typeof(TEntity).Name;
            switch (typeName)
            {
                case "AppRole":
                    return new AppRoleMapper();
                case "AppUser":
                    return new AppUserMapper();
                case "BasicFilter":
                    return new BasicFilterMapper();
                default:
                    throw new Exception("No mapping defined");
            }

        }
    }

}
