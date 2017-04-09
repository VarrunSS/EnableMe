angular.module("ToDoApp.services", [])
    .factory("utility", function () {

        return {
            resolveUrl: function (url, params) {
                params = params || {};
                url = this.replace(url, params, "##");
                if (angular.isDefined(url) && angular.isString(url)) {
                    return APP.basePath + url;
                    //return url;
                }



            },
            replace: function (str, params, delim) {
                delim = delim || "";
                params = params || {};
                for (var k in params) {
                    str = str.replace(delim + k + delim, params[k]);
                }

                return str;
            },
            addFromSecondElmt: function (pArr, cArr) {
                if (angular.isArray(pArr) && angular.isArray(cArr) && pArr.length >= 1) {
                    pArr.splice(1);
                    pArr = pArr.concat(cArr);
                    return pArr;
                }
                return pArr;
            },
            pluck: function (arr, name) {
                arr = arr || [];
                var i, len = arr.length, result = [];
                if (len > 0 && name in arr[0]) {
                    for (i = 0; i < len; i += 1) {
                        result.push(arr[i][name]);
                    }
                }
                return result;
            },
            getFileName: function (url, seperator) {
                url = url || "";

                if (url.endsWith(seperator)) {
                    url = url.substring(url.lastIndexOf(seperator) - 1);
                }

                return url.substring(url.lastIndexOf(seperator) + 1);
            },
            getFileNameFromUrl: function (url) {
                return this.getFileName(url, "/");
            },
            getFileNameFromPath: function (path) {
                var seperator = "\\";
                if (path.indexOf("/") != -1) {
                    seperator = "/";
                }
                return this.getFileName(path, seperator);
            },
            addDelimeter: function (arr) {
                var delim = "##DELIM##", dquote = "##DQUOTE##", res = [], i, l;
                if (arr) {
                    l = arr.length;
                    for (i = 0; i < l; i += 1) {
                        if (i < l - 1) {
                            arr[i] = arr[i].replaceAll('"', dquote);
                            res.push(arr[i] + delim);
                        } else {
                            arr[i] = arr[i].replaceAll('"', dquote);
                            res.push(arr[i]);
                        }
                    }
                }

                return res;

            }


        }

    });