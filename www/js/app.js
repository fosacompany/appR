angular
.module('enterpriseApp', ['ionic'])
      .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
          if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
          }
          if(window.StatusBar) {
            StatusBar.styleDefault();
          }
        });
      })
      .config(function($stateProvider, $urlRouterProvider) {
          $stateProvider
              .state('enterprise', {
                  cache: false,
                  url: '/lists',
                  templateUrl: 'templates/list.html',
                  controller: 'EnterpriseController',
                  controllerAs: 'enterprises'
              })
              .state('enterprise-detail', {
                  url: '/enterprise/:enterpriseId',
                  templateUrl: 'templates/detail.html',
                  controller: 'EnterpriseDetailController',
                  controllerAs: 'enterpriseDetail'
              })
              .state('enterprise-add', {
                  url: '/enterprise/add',
                  templateUrl: 'templates/add.html',
                  controller: 'EnterpriseAddController',
                  controllerAs: 'enterpriseAdd'
              });

          $urlRouterProvider.otherwise('/lists');
      });
