using System.Web;
using System.Web.Mvc;

namespace Cognizant.DE.EnableMe.Web
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
