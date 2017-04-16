APP.app.constant("ToDoConfig", {
    roles: 'api/user/roles',
    search: 'api/user/search',
    basicFilter: 'api/user/basicfilter'
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
        }
    }
}]);