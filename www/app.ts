/// <reference path="../typings/app.d.ts" />
'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('westleaf', [
  'ionic',
  'ngAnimate', 'ngMessages', 'ngCookies', 'ngStorage', 'ngTouch', 'ngAudio',
  'angular-cache', 'angular-progress-arc',
  'ionic.rating',
  'ui.validate',
  'naif.base64',
  'tc.chartjs'
]);

import {Config} from './config/config';

import common = require('./utility/index'); common.load(app);
// import directives = require('./components/directives/index'); directives.load(app);
// import components = require('./components/components/index'); components.load(app);
// import filters = require('./components/filters/index'); filters.load(app);
import services = require('./components/services/index'); services.load(app);
// import enums = require('./enums/index');

// /* features */
// import share = require('./features/share/index'); share.load(app);
import welcome = require('./features/welcome/index'); welcome.load(app);
// import user = require('./features/user/index'); user.load(app);
import treat = require('./features/treat/index'); treat.load(app);
// import insurance = require('./features/insurance/index'); insurance.load(app);
// import claim = require('./features/claim/index'); claim.load(app);
// import order = require('./features/order/index'); order.load(app);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider: angular.ILocationProvider, $stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

  welcome.states($stateProvider);
  treat.states($stateProvider);

  $urlRouterProvider.otherwise('/welcome');

// }]).run(['$rootScope', '$window', '$location', '$ionicHistory', common.storeService.serviceName, common.utilService.serviceName, services.userService.serviceName, ($rootScope, $window, $location, $ionicHistory, storeService: common.storeService.Service,  utilService: common.utilService.Service, userService: services.userService.Service) => {

  // $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
  //   utilService.rememberState(toState, toParams);
  // });

}]);

