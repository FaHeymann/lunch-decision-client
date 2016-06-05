angular.module('lunch-decision.services', [])

.factory('Meals', function($http, $localStorage) {
  return {
    current: function() {
      return $http.get($localStorage.api_base + '/api/v1/current')
        .then(function success(response) {
          return response.data;
        });
    },
    all: function() {
      return $http.get($localStorage.api_base + '/api/v1/all')
        .then(function success(response) {
          return response.data;
        });
    }
  };
})
.factory('Veto', function($http, $localStorage) {
  return {
    post: function(mealId) {
      return $http.post($localStorage.api_base + '/api/v1/veto/' + mealId)
        .then(function success(response) {
          return response;
        });
    }
  }
});
