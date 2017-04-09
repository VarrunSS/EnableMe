using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cognizant.DE.EnableMe.DAL.SQL
{
    public static class SqlExtensions
    {
        public static void AddParamatersIfAny(this SqlCommand cmd, IDictionary<string, object> parameters)
        {
            if (cmd == null)
            {
                throw new ArgumentNullException("cmd");
            }

            if (parameters == null)
            {
                throw new ArgumentNullException("parameters");
            }

            foreach (var parameter in parameters)
            {
                cmd.Parameters.AddWithValue(parameter.Key, parameter.Value);
            }
        }

    }
}
