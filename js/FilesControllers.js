 var FilesControllers = angular.module('FilesControllers', []);

FilesControllers.controller('FilesListCtrl', function ($scope, files){
  files.list(function(files) {
    $scope.files = files;
  });
});

FilesControllers.controller('FileDetailCtrl', function ($scope, $routeParams, files){
  files.find($routeParams.fileId, function(file) {
    $scope.file = file;
  });
});
