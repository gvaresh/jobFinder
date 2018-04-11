angular.module('app',['ngResource']);
angular.module('app').controller('testCtrl',function($scope,$resource) {
    // body...
    $scope.jobs= $resource('/api/jobs').query();
});