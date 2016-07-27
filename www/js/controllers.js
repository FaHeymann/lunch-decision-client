angular.module('lunch-decision.controllers', [])

.controller('CurrentCtrl', function($scope, $localStorage, Meals, Veto) {

  $scope.$on('$ionicView.enter', function(e) {
    $scope.vetod = true;

    Meals.current()
    .then(function(response) {
      $scope.currentMeal = response.meal;
      $scope.vetod = !response.canVeto;
    });
  });

  $scope.status = 'default';

  $scope.postVeto = function() {
    if($scope.vetod) {
      return;
    }

    Veto.post($scope.currentMeal.id)
    .then(function (response) {
      $scope.status = response.status == 200 ? 'success' : 'error';
      if(response.status == 200) {

        $scope.vetod = true;

        Meals.current()
        .then(function(response) {
          $scope.currentMeal = response.meal;
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
  Meals.all().then(function(meals) {
    $scope.meal = meals.find(function(meal) {
      return meal.id == $stateParams.mealId;
    })
  });
})

.controller('SettingsCtrl', function($scope, $localStorage) {
  $scope.$storage = $localStorage.$default({
    api_base: 'http://localhost:9000',
    api_token: '',
  });
});
