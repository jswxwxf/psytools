'use strict';

import config = require('../../config/config');
// import common = require('../../utility/index');
// import services = require('../../components/services/index');
// import enums = require('../../enums/index');

import welcomeController = require('./welcome-controller');

export var load = (app: angular.IModule) => {
  app.controller(welcomeController.controllerName, welcomeController.Controller);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'features/welcome/welcome.html',
      controller: welcomeController.controllerName,
      controllerAs: 'ctrl'
    });

};
