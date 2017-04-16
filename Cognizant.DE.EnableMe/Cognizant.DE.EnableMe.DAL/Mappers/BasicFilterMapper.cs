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
                    AccountName = (string)GetFieldValue<string>(r, "AccountName"),
                    GroupID = (string)GetFieldValue<string>(r, "Group"),
                    BUID = (string)GetFieldValue<string>(r, "BU"),
                    SBUID = (string)GetFieldValue<string>(r, "SBU"),
                    VerticalID = (string)GetFieldValue<string>(r, "Vertical"),
                    PracticeID = (string)GetFieldValue<string>(r, "Practice"),
                    SubVerticalID = (string)GetFieldValue<string>(r, "SubVertical"),
                    ParentAccountID = (string)GetFieldValue<string>(r, "ParentAccount"),
                    AccountID = (string)GetFieldValue<string>(r, "Account"),
                    EntryBitKey = (int)GetFieldValue<int>(r, "EntryBitKey"),
                    PerformanceBitKey = (int)GetFieldValue<int>(r, "PerformanceBitKey"),
                    BasicBitKey = (int)GetFieldValue<int>(r, "BasicBitKey"),
                    PrefilledBitKey = (int)GetFieldValue<int>(r, "PrefilledBitKey")
                };
            });

            return result;
        }
    }
}
