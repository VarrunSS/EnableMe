'use strict';

// JS built-in types extension methods
// Array indexOf function is not implemented in IE since it is not part of ECMAScript, So i am gonna have my own:-)
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) { return i; }
        }
        return -1;
    }

}

// JS built-in types extension methods
// Array indexOf function is not implemented in IE since it is not part of ECMAScript, So i am gonna have my own:-)
if (!Array.prototype.indexOfCIns) {
    Array.prototype.indexOfCIns = function (obj, start) {
        var o = obj.toLowerCase();
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i].toLowerCase() === o) { return i; }
        }
        return -1;
    }

}

// Array indexOf function for complex array

if (!Array.prototype.indexOfComplex) {
    Array.prototype.indexOfComplex = function (idKey, idVal) {
        var i, len;
        for (i = 0, len = this.length; i < len; i++) {
            if (this[i][idKey] == idVal) {
                return i;
            }
        }
        return -1;
    }
}

// To remove an element from an array
if (!Array.prototype.remove) {
    Array.prototype.remove = function (val) {
        var i = this.indexOf(val);
        if (i != -1) {
            this.splice(i, 1);
        }
    }
}

// Execute a function in another context / object

if (!Function.prototype.createDelegate) {
    Function.prototype.createDelegate = function (obj, handler) {
        handler = handler || this;
        return function () {
            handler.apply(obj, arguments);
        }
    }
}

if (!String.prototype.endWith) {
    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (find, replace) {
        return this.replace(new RegExp(find, 'g'), replace);
    };
}

APP.app = angular.module("ToDoApp", ["ngRoute", "nya.bootstrap.select", "ui.bootstrap.datetimepicker",
    "ngTable", "ngMessages", "ngTouch", "angucomplete-alt", "ngScrollbars", "ngMaterial",
    "material.svgAssetsCache", "tabs", "ngAnimate", "ui.bootstrap", 'ngTagsInput',
"ToDoApp.directives", "ToDoApp.controllers", "ToDoApp.services", "ToDoApp.filters"]);

