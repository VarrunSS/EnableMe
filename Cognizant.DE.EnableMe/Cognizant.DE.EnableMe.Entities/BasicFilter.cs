using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Entities
{
    public class BasicFilter : IEntity
    {
        public string GroupName { get; set; }
        public string BUName { get; set; }
        public string SBUName { get; set; }
        public string VerticalName { get; set; }
        public string PracticeName { get; set; }
        public string SubVerticalName { get; set; }
        public string ParentAccountName { get; set; }
        public string AccountName { get; set; }
    }
}
