angular.module('bird.ui.hashtag')
.controller('hashtaCtrl', function($scope, $locale, data) {
      $scope.$watch('text', function(text) {
        $scope.model = text;
  }, true)
   
    console.debug($scope.text);
  data.query(function(data) {
    $scope.posts = data;
  });
});