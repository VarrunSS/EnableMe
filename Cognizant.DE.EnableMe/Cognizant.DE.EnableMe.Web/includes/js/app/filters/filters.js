var filterModule = angular.module("ToDoApp.filters", [])
filterModule.filter('startFrom', function () {
    return function (input, start) {
        if (input && !isNaN(start)) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
}).filter('allowNumbericKey', function () {
    return function (ele) {
        $(ele).keydown(function (e) {
            -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault();
        });
    };
}).filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
}).filter("unique", function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });

        return output;
    };
}).filter('inArray', function ($filter) {
    return function (list, arrayFilter, element) {
        if (arrayFilter && arrayFilter.length>0) {
            return $filter("filter")(list, function (listItem) {
                return arrayFilter.indexOf(listItem[element]) != -1;
            });
        }
        return list;
    };
});