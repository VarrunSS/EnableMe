using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Entities
{
    public class BasicFilter : IEntity
    {
        public string GroupID { get; set; }
        public string GroupName { get; set; }
        public string BUID { get; set; }
        public string BUName { get; set; }
        public string SBUID { get; set; }
        public string SBUName { get; set; }
        public string VerticalID { get; set; }
        public string VerticalName { get; set; }
        public string PracticeID { get; set; }
        public string PracticeName { get; set; }
        public string SubVerticalID { get; set; }
        public string SubVerticalName { get; set; }
        public string ParentAccountID { get; set; }
        public string ParentAccountName { get; set; }
        public string AccountID { get; set; }
        public string AccountName { get; set; }
        public int EntryBitKey { get; set; }
        public int PerformanceBitKey { get; set; }
        public int BasicBitKey { get; set; }
        public int PrefilledBitKey { get; set; }

    }
}
