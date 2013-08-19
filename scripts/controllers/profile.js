'use strict';

function ProfileCtrl($scope, $route, $http, $timeout) {
    $scope.GetTechStack = function() {
        jQuery.getJSON('//api-jarrodtoh.ap01.aws.af.cm/profile/technologies/list/?callback=?', {
            format: 'jsonp'
        }, function(xhrResponse) {
            $scope.$apply(function() {
                if (xhrResponse) {
                    $scope.technologies = xhrResponse;
                }
            });
        });
    };

    $scope.GetEducations = function() {
        $scope.tech = []
        jQuery.getJSON('//api-jarrodtoh.ap01.aws.af.cm/profile/educations/list/?callback=?', {
            format: 'jsonp'
        }, function(xhrResponse) {
            $scope.$apply(function() {
                if (xhrResponse) {
                    $scope.educations = xhrResponse;
                }
            });
        });
    };

    $scope.GetExperiences = function() {
        $scope.tech = []
        jQuery.getJSON('//api-jarrodtoh.ap01.aws.af.cm/profile/experiences/list/?callback=?', {
            format: 'jsonp'
        }, function(xhrResponse) {
            $scope.$apply(function() {
                if (xhrResponse) {
                    $scope.experiences = xhrResponse;
                }
            });
        });
    };

    $scope.isDateCurrent = function(date) {
        var dateTest = new Date(date);
        var dateToday = new Date();

        if (dateToday <= dateTest) {
            return true;
        }

        return false;
    };

    $scope.formatDate = function(date) {
        var dateTest = new Date(date);
        var formattedDate = dateTest.format("mmm yyyy");

        return formattedDate;
    };

    (function() {
        $scope.GetTechStack();
        $scope.GetEducations();
        $scope.GetExperiences();
    })();
}
