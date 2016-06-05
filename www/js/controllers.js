angular.module('lunch-decision.controllers', [])

.controller('CurrentCtrl', function($scope, $localStorage, Meals, Veto) {
  $scope.$on('$ionicView.enter', function(e) {
    $scope.vetod = $localStorage.vetod;

    Meals.current()
    .then(function(meal) {
      $scope.currentMeal = meal;
    });
  });

  $scope.status = 'default';

  $scope.postVeto = function() {
    if($localStorage.vetod) {
      return;
    }

    Veto.post($scope.currentMeal.id)
    .then(function (response) {
      $scope.status = response.status == 200 ? 'success' : 'error';
      if(response.status == 200) {

        $localStorage.vetod = $scope.vetod = true;

        Meals.current()
        .then(function(meal) {
          $scope.currentMeal = meal;
        });
      }
    });
  }
})

.controller('AllCtrl', function($scope, Meals) {
  $scope.$on('$ionicView.enter', function(e) {
    Meals.all()
    .then(function(meals) {
      $scope.meals = meals;
    });
  });
})

.controller('MealDetailCtrl', function($scope, $stateParams, Meals) {
  // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SettingsCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage.$default({
    api_base: 'http://localhost:9000'
  });
});
