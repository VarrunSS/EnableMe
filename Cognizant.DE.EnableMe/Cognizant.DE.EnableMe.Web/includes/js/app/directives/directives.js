var directiveModule = angular.module("ToDoApp.directives", ['ui.bootstrap']);
/** Directives - Start**/
/** BS-Slider Directive - Start **/
directiveModule.directive('bxSlider', function () {
    var BX_SLIDER_OPTIONS = {
        slideWidth: '160',
        //minSlides:6,
        maxSlides: 8,
        slideMargin: 10,
        infiniteLoop: false,
        hideControlOnEnd: true,
        moveSlides: 1,
        pager: false
    };

    return {
        restrict: 'A',
        require: 'bxSlider',
        priority: 0,
        controller: function () { },
        link: function (scope, element, attrs, ctrl) {
            var slider;
            ctrl.update = function () {
                slider && slider.destroySlider();
                slider = element.bxSlider(BX_SLIDER_OPTIONS);
            };
        }
    }
})
directiveModule.directive('bxSliderItem', function ($timeout) {
    return {
        require: '^bxSlider',
        link: function (scope, elm, attr, bxSliderCtrl) {
            if (scope.$last) {
                bxSliderCtrl.update();
            }
        }
    }
})
directiveModule.directive('docListWrapper', ['$timeout', '$rootScope', function ($timeout, $rootScope) {
    return {
        restrict: 'AEC',
        priority: 500,
        replace: true,
        templateUrl: 'tmpl-doc-list-wrapper',
        scope: {
            docs: '=docs',
            selectedmenu: '=selectedmenu'
        },
        link: function (scope, element, attrs, ctrl) {
            scope.myclick = function (a, b) {
                if (b == 'tab') {
                    $rootScope.$broadcast('gocarousel', a);
                    $rootScope.$broadcast('carouselhighlight', a);
                }
                else if (b == 'scroll') {
                    $rootScope.$broadcast('gomain', a);
                    $rootScope.$broadcast('gotabCtrl', a);
                }
                else {
                    return;
                }
            }
        }
    };
}])
/** BX-Slider Directive - End **/
/*** Tooltip - Start ***/
directiveModule.directive('tooltip', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).hover(function () {
                // on mouseenter
                $(element).tooltip('show');
            }, function () {
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
/*** Tooltip - End ***/
/** Directives - End **/