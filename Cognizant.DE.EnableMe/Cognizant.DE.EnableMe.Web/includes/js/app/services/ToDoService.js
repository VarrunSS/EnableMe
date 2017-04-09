APP.app.constant("ToDoConfig", {
    roles: 'api/user/roles',
    profile: 'api/user/profile',
    basicFilter: 'api/user/basicfilter'
})
APP.app.factory("ToDoService", ["$http", "utility", "ToDoConfig", function ($http, utility, ToDoConfig) {

    return {        
        getRoles: function (id) {
            return $http.get(utility.resolveUrl(ToDoConfig.roles), {
                params: { id: id }
            });
        },
        getProfile: function (id) {
            return $http.get(utility.resolveUrl(ToDoConfig.profile), {
                params: { id: id }
            });
        },
        getBasicFilter: function (id,roleID) {
            return $http.get(utility.resolveUrl(ToDoConfig.basicFilter), {
                params: { id: id , roleID:roleID}
            });
        }
    }
}]);