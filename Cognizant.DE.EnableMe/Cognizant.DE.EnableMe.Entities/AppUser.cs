using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Entities
{
    public class AppUser : IEntity
    {
        public int ID { get; set; }
        public string EmployeeID { get; set; }
        public string Name { get; set; }
        public string DisplayName { 
            get 
            {
                return string.Format("{0} ({1})", Name, EmployeeID);
            }
        }
        public int RoleID { get; set; }
        public string RoleName { get; set; }
    }
}
