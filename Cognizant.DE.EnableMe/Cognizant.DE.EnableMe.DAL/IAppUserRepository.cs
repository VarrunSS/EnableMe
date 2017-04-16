using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL
{
    public interface IAppUserRepository
    {
        AppUser Get(string associateID);
        IEnumerable<AppUser> Search(int key);
    }
}
