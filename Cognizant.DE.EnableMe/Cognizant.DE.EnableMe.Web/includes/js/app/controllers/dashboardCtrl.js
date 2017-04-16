angular.module("ToDoApp.controllers", [])
.controller("dashboardCtrl", ["$scope", "$rootScope", "utility", "ToDoService", "$filter", function ($scope, $rootScope, utility, ToDoService, $filter) {
    /** BX- Slider data - start **/
    $scope.docs = [{ "stageName": "High Alert", "score": "60", "type": "tab" },
						{ "stageName": "Scope & Category", "score": "70", "type": "tab" },
						{ "stageName": "Kick - Off", "score": "82", "type": "tab" },
						{ "stageName": "PMR", "type": "tab", "score": "145", },
						{ "stageName": "Risk", "type": "tab", "score": "37", },
						{ "stageName": "Findings", "score": "16", "type": "tab" },
						{ "stageName": "Codenizant", "score": "59", "type": "tab" },
						{ "stageName": "QoS", "score": "60", "type": "tab" }];
    /** BX- Slider data - End **/
    /** breadCrumb select **/
    $scope.dashboardVerticalOptions = ['Vertical', 'HEALTHCARE', 'INTERNAL', 'RETAIL', 'TECHNOLOGY', 'BFS', 'EU', 'MANLOG']
    $scope.dashboardVertical = 'Vertical';
    $scope.dashboardPureVerticalOptions = ['Pure Vertical', 'HEALTHCARE', 'INTERNAL', 'RETAIL', 'TECHNOLOGY', 'BFS', 'EU', 'MANLOG']
    $scope.dashboardPureVertical = 'Pure Vertical'
    $scope.verticalOptions = ['HEALTHCARE', 'INTERNAL', 'RETAIL', 'TECHNOLOGY', 'BFS', 'EU', 'MANLOG'];
    $scope.buOptions = ['HEALTHCARE - NA', 'NORDICS', 'BENELUX', 'BFS - NA', 'ASEAN', 'JAPAN', 'LIFE SCIENCE - UK', 'GERMANY', 'ML - UK', 'RCG - NA'];
    $scope.subverticalOptions = ['Administration-India', 'Marketing', 'RMG', 'CGS NA', 'BPO', 'SV02', 'NA - South East', 'NA - North East'];
    $scope.parentaccountOptions = ['COGNIZANT ADMIN', 'COGNIZANT MARKETING', 'MOLINA', 'COGNIZANT GWFM', 'EMM GROUP', 'UHG', 'CTS', 'LIBERTY MUTUAL', 'ARBITRON', 'COVAD', 'CBEYOND', 'WELLS FARGO']
    $scope.allaccountOptions = ['Cognizant Admin', 'Cognizant Marketing', 'Molina Healthcare, Inc.-BPO', 'Cognizant GWFM', 'Emm Group Inc', 'UHG IT', 'BPO Internal', 'Liberty Mutual Insurance Company', 'Arbitron - ODC', 'MegaPath, Inc.', 'Cbeyond Communications', 'Wells Fargo Community Banking', 'D & B Canada', 'Hess Corporation', 'JPMC Mortgage Bank - Shared Services', 'Aetna Inc - QES', 'Oracle America Inc.', 'Arrowood Indemnity Company']
    $scope.serviceLineOption = ['Service Line', 'Service Line 1', 'Service Line 2'];
    $scope.projectCategoryOption = ['Project Category', 'Project Category 1', 'Project Category 2'];
    $scope.billabilityOption = ['Billability', 'Billability 1', 'Billability 2'];
    $scope.trackingPlatformOption = ['Tracking Platform', 'Tracking Platform 1', 'Tracking Platform 2'];
    $scope.subSolutionAreaOption = ['Sub Solution Area', 'Sub Solution Area 1', 'Sub Solution Area 2'];
    $scope.scopeOption = ['Scope', 'Scope 1', 'Scope 2']

    /** breadCrumb select **/
    /*** Show/Hide Filter - Start ***/
    $scope.audithidefilter = true;
    $scope.filter = true;
    $scope.toggleFilter = function () {
        $scope.filter = !$scope.filter
    }
    $scope.$watch('filter', function () {
        $scope.toggleText = $scope.filter ? 'Show Filter' : 'Hide Filter';
        $scope.hidefilter = !$scope.hidefilter;
    })
    /*** Show/Hide Filter - End ***/
    $scope.showUserSwitch = false;
    $scope.basicFilter = [];
    $scope.basicFilterKey = 0;
    $scope.entryFilterKey = 0;
    $scope.entryFilter = [];
    $scope.entryFilterList = [
                       { "name": "Vertical", "key": 1 },
                       { "name": "Horizontal", "key": 2 },
                       { "name": "Geo", "key": 4 }];
    $scope.performanceFilterKey = 0;
    $scope.performanceFilter = [];
    $scope.performanceFilterList = [
                       { "name": "Vertical", "key": 1 },
                       { "name": "Horizontal", "key": 2 },
                       { "name": "Vertical + Horizontal", "key": 3 }];
    $scope.selectedGroup = [];
    $scope.selectedBU = [];
    $scope.selectedSBU = [];
    $scope.selectedPractice = [];
    $scope.selectedVertical = [];
    $scope.selectedSubVertical = [];
    $scope.selectedParentAccount = [];
    $scope.selectedAccount = [];
    $scope.filterCondition = {};
    $scope.toogleUserSwitch = function () {
        $scope.showUserSwitch = !$scope.showUserSwitch;
    }
    $scope.$on('toogleUserSwitch', function (event, args) {
        $scope.toogleUserSwitch();
    });
    $scope.searchUser = function (key) {
        if (TryParseInt(key)) {
            return ToDoService.getUserByKey(key).then(function (response) {
                var currResponse = response.data;
                return currResponse.map(function (item) {
                    return item;
                });
            });
        }
    };
    $scope.switchUser = function () {
        $scope.toogleUserSwitch();
        $scope.$emit('userSwitched', { user: $scope.switchedUser });
    };
    $scope.GetUserBasicFilter = function (userID,roleID) {
        ToDoService.getBasicFilter(userID, roleID).success(function (data) {
            console.log(data.length);
            if (data != null) {
                $scope.basicFilter = data;
                $scope.basicFilterKey = $scope.findDistinctSum($scope.basicFilter, 'BasicBitKey');
                $scope.entryFilterKey = $scope.findDistinctSum($scope.basicFilter, 'EntryBitKey');
                $scope.entryFilter = $scope.setFilter($scope.entryFilterList,$scope.entryFilterKey);
                $scope.performanceFilterKey = $scope.findDistinctSum($scope.basicFilter, 'PerformanceBitKey');
                $scope.performanceFilter = $scope.setFilter($scope.performanceFilterList, $scope.performanceFilterKey);
            }
        }).error(function (data) {

        });
    };
    $scope.$watch('selectedRole', function () {
        if (angular.isDefined($rootScope.user) && angular.isDefined($rootScope.selectedRole)
            && angular.isDefined($rootScope.selectedRole.ID)) {
            $scope.GetUserBasicFilter($rootScope.user.ID, $rootScope.selectedRole.ID);
        }
    });
    $scope.getFilterData = function (arr, prop, val, key) {
        var filteredArray = [];
        if ((val & key) > 0)
        {
            filteredArray=$scope.findUniqueValue(arr, prop);
        }
        return filteredArray;
    };
    $scope.getFilterKey = function (arr, val, key) {
        if (((val & key) > 0) && arr.length >0) {
            return key;
        }
        return 0;
    };
    $scope.loadFilterData = function () {
        $scope.filterCondition.Key = 0;
        $scope.filterCondition.SelectedGroup = $scope.getFilterData($scope.selectedGroup, "GroupID",
            $scope.basicFilterKey, 32);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedGroup,
            $scope.basicFilterKey, 32);
        $scope.filterCondition.SelectedBU = $scope.getFilterData($scope.selectedBU, "BUID",
            $scope.basicFilterKey, 64);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedBU,
           $scope.basicFilterKey, 64);
        $scope.filterCondition.SelectedSBU = $scope.getFilterData($scope.selectedSBU, "SBUID",
            $scope.basicFilterKey, 128);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedSBU,
           $scope.basicFilterKey, 128);
        $scope.filterCondition.SelectedPractice = $scope.getFilterData($scope.selectedPractice, "PracticeID",
            $scope.basicFilterKey, 2);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedPractice,
           $scope.basicFilterKey, 2);
        $scope.filterCondition.SelectedVertical = $scope.getFilterData($scope.selectedVertical, "VerticalID",
            $scope.basicFilterKey, 1);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedVertical,
           $scope.basicFilterKey, 1);
        $scope.filterCondition.SelectedSubVertical = $scope.getFilterData($scope.selectedSubVertical, "SubVerticalID",
            $scope.basicFilterKey, 4);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedSubVertical,
           $scope.basicFilterKey, 4);
        $scope.filterCondition.SelectedParentAccount = $scope.getFilterData($scope.selectedParentAccount, "ParentAccountID",
            $scope.basicFilterKey, 8);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedParentAccount,
           $scope.basicFilterKey, 8);
        $scope.filterCondition.SelectedAccount = $scope.getFilterData($scope.selectedAccount, "AccountID",
            $scope.basicFilterKey, 16);
        $scope.filterCondition.Key += $scope.getFilterKey($scope.filterCondition.selectedAccount,
           $scope.basicFilterKey, 16);
        console.log($scope.filterCondition.Key);
    };
    $scope.setFilter = function (arr,val) {
        var filteredArray = $filter('filter')(arr, function (item) {
            return (item.key & val) > 0;
        });
        return filteredArray;
    };
    $scope.bitAND = function (val, key) {
        return(key & val) > 0;
    };
    $scope.findUniqueValue = function (arr, prop) {
        var filteredArray = $filter('unique')(arr, prop)
            .map(function (a) {
                return a[prop];
            });
        return filteredArray;
    };
    $scope.findDistinctSum = function (arr, prop) {
        var sum = 0;
        var filteredArray = $scope.findUniqueValue(arr, prop);
        if (filteredArray.length > 0) {
            sum = filteredArray.reduce(function (a, b) {
                return a + b;
            });
        }
        return sum;
    };
    function TryParseInt(val) {
        var pattern = /^\d+$/;
        return pattern.test(val);
    }

}]);