APP.app.controller('rootCtrl', ['$scope', '$rootScope', 'utility', 'ToDoService', function ($scope,$rootScope, utility, ToDoService) {
    /*** Toggle Function - Start ***/
    $scope.toggle = function () {
        if ($scope.class == "collapsed")
            $scope.class = "expand";
        else
            $scope.class = "collapsed";
    };
    /*** Toggle Function - End ***/
    /*** Menu Mouse over - Start ***/
    $scope.showMegaMenu = function () {
        $scope.menuIsVisible = true;
    };
    $scope.hideMegaMenu = function () {
        $scope.menuIsVisible = false;
    };
    /*** Menu Mouse over - End ***/
    /*** Left Menu - Role Change - Collpased View ***/
    $scope.roleMenuSection = false;
    $scope.showRoleMenu = function () {
        $scope.roleMenuSection = true;
        $scope.notActive = "active";
    };
    $scope.hideRoleMenu = function () {
        $scope.roleMenuSection = false;
        $scope.notActive = "";
    };
    $scope.activeleftMenu = 1
    $scope.activateMenu = function (a) {
        $scope.activeleftMenu = a

    }
    /*** Left Menu - Role Change - Collpased View - End ***/
    $rootScope.selectedRole = {};
    $scope.userRoles = [];
    $scope.dropOpen = false;
    $scope.selectOption = function (value) {
        if ($rootScope.selectedRole != value) {
            $rootScope.selectedRole = value;
        }
        $scope.toogleRoleDropDown();
    }
    $scope.toogleRoleDropDown = function () {
        $scope.dropOpen = !$scope.dropOpen;
    }
    $scope.modalScrollbarConfig = {
        theme: 'dark',
        scrollInertia: 500,
        setHeight: 218
    }


    $rootScope.user = APP.User;
    $rootScope.authUser = APP.User;
    
    $scope.GetUserRoles = function (roleID) {
        ToDoService.getRoles(roleID).success(function (data) {
            if (data != null) {
                $scope.userRoles = data;
                if($scope.userRoles.length>0)
                {
                    $rootScope.selectedRole = $scope.userRoles[0];
                }
            }
        }).error(function (data) {

        });
    };
    $scope.GetUserRoles($rootScope.user.RoleID);
    $scope.toogleUserSwitch = function () {
        $scope.$broadcast('toogleUserSwitch');
    }
    $scope.$on('userSwitched', function (event, args) {
        $rootScope.user = args.user;
        $scope.GetUserRoles($rootScope.user.RoleID);
    });
}]);