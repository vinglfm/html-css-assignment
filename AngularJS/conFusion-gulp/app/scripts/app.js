'use strict';

angular.module('confusionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
          $stateProvider.state('app', {
              url:'/',
              views: {
                'header': {
                  templateUrl:'views/header.html',
                },
                'content': {
                  template : '<h3>Placeholder</h3>',
                  controller: 'IndexController',
                },
                'footer': {
                  templateUrl: 'views/footer.html',
                }
              }
          })
          .state('app.aboutus', {
            url:'aboutus',
            views: {
              'content@': {
                template : '<h3>Placeholder</h3>',
                controller : 'AboutController'
              }
            }
          })
          .state('app.contactus', {
            url:'contactus',
            view: {
              'content@': {
                templateUrl : 'views/contactus.html',
                controller : 'ContactController'
              }
            }
          })
          .state('app.menu', {
            url: 'menu',
            views: {
              'content@': {
                templateUrl : 'views/menu.html',
                controller  : 'MenuController'
              }
            }
          })
          .state('app.dishdetails', {
              url: 'menu/:id',
              views: {
                'content@': {
                  templateUrl : 'views/dishdetail.html',
                  controller  : 'DishDetailController'
                 }
              }
          });
          $urlRouterProvider.otherwise('/');
});
// angular.module('confusionApp', ['ngRoute'])
// .config(function($routeProvider) {
//         $routeProvider
//             // route for the contactus page
//             .when('/contactus', {
//                 templateUrl : 'contactus.html',
//                 controller  : 'ContactController'
//             })
//             // route for the menu page
//             .when('/menu', {
//                 templateUrl : 'menu.html',
//                 controller  : 'MenuController'
//             })
//             // route for the dish details page
//             .when('/menu/:id', {
//                 templateUrl : 'dishdetail.html',
//                 controller  : 'DishDetailController'
//             })
//             .otherwise('/contactus');
//     });
