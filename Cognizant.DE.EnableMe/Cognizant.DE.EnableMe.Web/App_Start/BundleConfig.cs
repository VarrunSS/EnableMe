using System.Web;
using System.Web.Optimization;

namespace Cognizant.DE.EnableMe.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/js/app")
                .Include("~/includes/js/app/app.js")
                .IncludeDirectory("~/includes/js/app/controllers", "*.js", true)
                .IncludeDirectory("~/includes/js/app/services", "*.js", true)
                .IncludeDirectory("~/includes/js/app/filters", "*.js", true)
                .IncludeDirectory("~/includes/js/app/directives", "*.js", true));
        }
    }
}
