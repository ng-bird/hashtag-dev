var nest = angular.module('bird.ui.hashtag');
nest.directive('hashTag', function() {
    return {
      restrict: 'EA',
      transclude: false,
      replace: false,
      scope: {},
      controller: function($scope, $element) {

      },
      template:'<div class="tag-container" contenteditable ng-model="text"></div>'
    };
});

nest.directive('contenteditable', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {
        var read;
        if (!ngModel) {
          return;
        }
        ngModel.$render = function() {
          return element.html(ngModel.$viewValue);
        };
        element.bind('keyup keydown keypress', function() {
          if (ngModel.$viewValue !== element.html()) {
            return ngModel.$setViewValue(element.html());
          }
        });

      }
    };
  });