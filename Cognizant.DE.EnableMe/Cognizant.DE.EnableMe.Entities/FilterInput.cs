using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.Entities
{
    public class FilterInput : IEntity
    {
        public int Key { get; set; }
        public IEnumerable<int> SelectedGroup { get; set; }
        public IEnumerable<int> SelectedBU { get; set; }
        public IEnumerable<int> SelectedSBU { get; set; }
        public IEnumerable<int> SelectedPractice { get; set; }
        public IEnumerable<int> SelectedVertical { get; set; }
        public IEnumerable<int> SelectedSubVertical { get; set; }
        public IEnumerable<int> SelectedParentAccount { get; set; }
        public IEnumerable<int> SelectedAccount { get; set; }
    }
}
