angular.module('quick-survey').directive('addQuestionWithOptions', function () {
  return {
    restrict: 'A',
    scope: {
      question: '=question',
      existingOptions: '='
    },
    controller: function ($scope) {
      if (!$scope.existingOptions) {
        $scope.question.options = [{
          'value': '',
          'type': 'normal'
        }];
      }

      $scope.remove = function (idx) {
        $scope.question.options.splice(idx, 1);
      };

      $scope.addOption = function () {
        $scope.question.options.push({
          'value': '',
          'type': 'normal'
        });
      };

      $scope.addOther = function () {
        $scope.question.options.push({
          'type': 'other'
        });
      };
    },
    templateUrl: 'client/js/manage/directives/add-question-with-options.ng.html',
  };
});
