angular.module("ToDoApp.controllers", [])
.controller("homeCtrl", ["$scope","$rootScope", "utility", "ToDoService", function ($scope,$rootScope, utility, ToDoService) {
    $scope.selectedFilter = {};
    $scope.selectedFilter.Vertical = "";
    $scope.selectedFilter.Practice = "";
    $scope.selectedFilter.SubVertical = "";
    $scope.selectedFilter.ParentAccount = "";
    $scope.selectedFilter.Account = "";
    $scope.basicFilter = [];
    $scope.loadBasicFilter = function () {
        ToDoService.getBasicFilter(142358, $scope.$parent.selectedRole.RoleID)
        .success(function (data) {
            if (data != null) {
                console.log(data);
                $scope.basicFilter = data;
            }
        }).error(function (data) {

        });
    };
    $scope.bDropDown = {};
    $scope.bDropDown.Vertical = false;
    $scope.toggleVertical = function () {
        $scope.bDropDown.Vertical = !$scope.bDropDown.Vertical;
    };
    $scope.selectVertical = function (value) {
        $scope.selectedFilter.Vertical = value;
        $scope.bDropDown.Vertical = false;
    }
    $scope.bDropDown.Practice = false;
    $scope.togglePractice = function () {
        $scope.bDropDown.Practice = !$scope.bDropDown.Practice;
    };
    $scope.selectPractice = function (value) {
        $scope.selectedFilter.Practice = value;
        $scope.bDropDown.Practice = false;
    }
    $scope.bDropDown.SubVertical = false;
    $scope.toggleSubVertical = function () {
        $scope.bDropDown.SubVertical = !$scope.bDropDown.SubVertical;
    };
    $scope.selectSubVertical = function (value) {
        $scope.selectedFilter.SubVertical = value;
        $scope.bDropDown.SubVertical = false;
    }
    $scope.bDropDown.ParentAccount = false;
    $scope.toggleParentAccount = function () {
        $scope.bDropDown.ParentAccount = !$scope.bDropDown.ParentAccount;
    };
    $scope.selectParentAccount = function (value) {
        $scope.selectedFilter.ParentAccount = value;
        $scope.bDropDown.ParentAccount = false;
    }
    $scope.bDropDown.Account = false;
    $scope.toggleAccount = function () {
        $scope.bDropDown.Account = !$scope.bDropDown.Account;
    };
    $scope.selectAccount = function (value) {
        $scope.selectedFilter.Account = value;
        $scope.bDropDown.Account = false;
    }
    $scope.modalScrollbarConfig = {
        theme: 'dark',
        scrollInertia: 500,
        setHeight: 200
    }
}]);