APP.app.controller('rootCtrl', ['$scope', '$rootScope', 'utility', 'ToDoService', function ($scope,$rootScope, utility, ToDoService) {
    $scope.dropOpen = false;
    $scope.userName = "";
    $scope.user = {};
    //$scope.selectedVal = 'Auditor';
    $scope.selectedRole = {};
    $scope.selectedRole.RoleID = 0;
    $scope.roleOption = [];
    //$scope.auditOption = ['Audit Lead', 'Auditor/ Audit Specialist', 'Project Manager', 'Functional Head - Audit', 'Function Lead - DE Deployment', 'DE Deployment Lead', 'One Audit Administrator', 'Role 1', 'Role 2', 'Role 3', 'Role 4', 'Role 5'];
    $scope.selectOption = function (value) {
        $scope.selectedRole = value;
        $scope.dropOpen = false;
        $scope.$$childHead.loadBasicFilter();
    }
    $scope.toggleRoleDropDown = function () {
        $scope.dropOpen = !$scope.dropOpen;
    };
    $scope.modalScrollbarConfig = {
        theme: 'dark',
        scrollInertia: 500,
        setHeight: 200
    }
    ToDoService.getProfile("142358")
        .success(function (data) {
            if (data != null) {
                console.log(data);
                $scope.user = data;
                $scope.userName = $scope.user.Name;
            }
        }).error(function (data) {

        });
    ToDoService.getRoles("142358")
        .success(function (data) {
            if (data != null) {
                console.log(data);
                $scope.roleOption = data;
                if($scope.roleOption.length>0)
                {
                    $scope.selectedRole = $scope.roleOption[0];
                    $scope.$$childHead.loadBasicFilter();
                }
            }
        }).error(function (data) {

        });
}]);