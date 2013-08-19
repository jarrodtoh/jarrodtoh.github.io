'use strict';

function MainCtrl($scope, $route, $http, $timeout) {
    $scope.GetBlogCategory = function() {
        jQuery.getJSON('//api-jarrodtoh.ap01.aws.af.cm/blog/categories/list/?callback=?', {
            format: 'jsonp'
        }, function(xhrResponse) {
            $scope.$apply(function() {
                if (xhrResponse) {
                    $scope.categories = xhrResponse;
                }
            });
        });
    };

    (function() {
        $scope.GetBlogCategory();
    })();
}
