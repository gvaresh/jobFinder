angular.module('app',[]);
angular.module('app').controller('testCtrl',function($scope) {
    // body...
    $scope.jobs= [{title: 'sales person', description: 'you sales'},
                   {title: 'bus person', description: 'you buss'},
                   {title: 'car person', description: 'you car'},
                   {title: 'jeep person', description: 'you jeep'}];
})