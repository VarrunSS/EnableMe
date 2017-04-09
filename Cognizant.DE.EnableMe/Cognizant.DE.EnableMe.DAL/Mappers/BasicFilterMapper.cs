using Cognizant.DE.EnableMe.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.Mappers
{
    public class BasicFilterMapper : MapperBase
    {
        public override IEnumerable<IEntity> ToEntities(DataTable dataTable)
        {
            if (dataTable == null)
            {
                throw new ArgumentNullException("dataTable");
            }

            IEnumerable<BasicFilter> result = new List<BasicFilter>();

            result = dataTable.AsEnumerable().Select<DataRow, BasicFilter>(r =>
            {
                return new BasicFilter()
                {
                    GroupName = (string)GetFieldValue<string>(r, "GroupName"),
                    BUName = (string)GetFieldValue<string>(r, "BUName"),
                    SBUName = (string)GetFieldValue<string>(r, "SBUName"),
                    VerticalName = (string)GetFieldValue<string>(r, "VerticalName"),
                    PracticeName = (string)GetFieldValue<string>(r, "PracticeName"),
                    SubVerticalName = (string)GetFieldValue<string>(r, "SubVerticalName"),
                    ParentAccountName = (string)GetFieldValue<string>(r, "ParentAccountName"),
                    AccountName = (string)GetFieldValue<string>(r, "AccountName")
                };
            });

            return result;
        }
    }
}
