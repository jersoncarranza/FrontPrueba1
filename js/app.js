var countryApp = angular.module('FileApp', [
  'ngRoute',
  'FilesControllers',
  'FilesFactory',
  'FileDirective'
]);

countryApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'FilesList.html',
      controller: 'FilesListCtrl'
    }).
    when('/:countryId', {
      templateUrl: 'Filedetail.html',
      controller: 'FileDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});
