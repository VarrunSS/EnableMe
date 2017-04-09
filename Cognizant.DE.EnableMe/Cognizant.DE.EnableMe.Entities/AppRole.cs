using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Entities
{
    public class AppRole : IEntity
    {
        public int RoleID { get; set; }
        public string RoleName { get; set; }
    }
}
