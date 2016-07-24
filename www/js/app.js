angular.module('lunch-decision', ['ionic','ionic.service.core', 'lunch-decision.controllers', 'lunch-decision.services', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    //push dev
    // var push = new Ionic.Push({
    //   "debug": true,
    //
    //   onNotification: function(payload) {
    //     console.log(payload);
    //   }
    // });
    //
    // push.register(function(token) {
    //   console.log("Device token:",token.token);
    // });
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.current', {
    url: '/current',
    views: {
      'tab-current': {
        templateUrl: 'templates/tab-current.html',
        controller: 'CurrentCtrl'
      }
    }
  })

  .state('tab.all', {
    url: '/all',
    views: {
      'tab-all': {
        templateUrl: 'templates/tab-all.html',
        controller: 'AllCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tab.meal-detail', {
    url: '/all/:mealId',
    views: {
      'tab-all': {
        templateUrl: 'templates/meal-detail.html',
        controller: 'MealDetailCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/current');

});
