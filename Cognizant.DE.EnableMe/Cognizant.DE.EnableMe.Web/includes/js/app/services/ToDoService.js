APP.app.constant("ToDoConfig", {
    roles: 'api/user/roles',
    search: 'api/user/search',
    basicFilter: 'api/user/basicfilter',
    filterData:'api/user/filterdata'
})
APP.app.factory("ToDoService", ["$http", "utility", "ToDoConfig", function ($http, utility, ToDoConfig) {

    return {        
        getRoles: function (roleID) {
            return $http.get(utility.resolveUrl(ToDoConfig.roles), {
                params: { roleID: roleID }
            });
        },
        getUserByKey: function (key) {
            return $http.get(utility.resolveUrl(ToDoConfig.search), {
                params: { key: key }
            });
        },
        getBasicFilter: function (userID,roleID) {
            return $http.get(utility.resolveUrl(ToDoConfig.basicFilter), {
                params: { userID: userID, roleID: roleID }
            });
        },
        getFilterData: function (data) {
            console.log(JSON.stringify(data));
            console.log(CryptoJS.MD5(JSON.stringify(data)).toString(CryptoJS.enc.Base64));
            return $http.post(utility.resolveUrl(ToDoConfig.filterData), JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
        }
    }
}]);