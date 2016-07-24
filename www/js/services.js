angular.module('lunch-decision.services', [])

.factory('Meals', function($http, $localStorage) {
  return {
    current: function() {
      return $http.get($localStorage.api_base + '/api/v1/current', {
        headers: {
          'X-Auth': $localStorage.api_token,
        }
      })
        .then(function success(response) {
          console.log(response.data);
          return response.data;
        });
    },
    all: function() {
      return $http.get($localStorage.api_base + '/api/v1/all', {
        headers: {
          'X-Auth': $localStorage.api_token,
        }
      })
        .then(function success(response) {
          return response.data;
        });
    }
  };
})
.factory('Veto', function($http, $localStorage) {
  return {
    post: function(mealId) {
      return $http.post($localStorage.api_base + '/api/v1/veto/' + mealId, {}, {
        headers: {
          'X-Auth': $localStorage.api_token,
        }
      })
        .then(function success(response) {
          return response;
        });
    }
  }
});
