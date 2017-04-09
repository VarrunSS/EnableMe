using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

namespace Cognizant.DE.EnableMe.DAL.SQL
{
    public class SqlHelper : IDisposable
    {
        bool disposed = false;

        SqlConnection connection;

        public SqlHelper()
        {
            Intialize("Server=MY-PC\\MYPC; Database=ToDoDB; Integrated Security=True;");
        }

        private void Intialize(string cs)
        {
            connection = new SqlConnection(cs);
            OpenConnection();
        }

        private void OpenConnection()
        {
            if (connection.State != ConnectionState.Open)
            {
                connection.Open();
            }
        }

        public DataTable Fetch(string query, IDictionary<string, object> parameters)
        {
            OpenConnection();

            DataTable dt = new DataTable();

            try
            {
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.AddParamatersIfAny(parameters);
                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                adapter.Fill(dt);
            }
            catch (Exception) // TODO: use sub class exception
            {
                throw; // TODO: throw Sql specific exception
            }

            return dt;
        }

        public void Change(string query, IDictionary<string, object> parameters)
        {
            OpenConnection();

            try
            {
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.AddParamatersIfAny(parameters);
                cmd.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (!disposed)
                {
                    if (connection != null)
                    {
                        connection.Dispose();
                    }
                }

                disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}
