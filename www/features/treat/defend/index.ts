'use strict';

import common = require('../../../utility/index');
// import services = require('../../../components/services/index');
// import enums = require('../../../enums/index');

import defendController = require('./defend-controller');

export var load = (app: angular.IModule) => {
  app.controller(defendController.controllerName, defendController.Controller);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('treat.defend', {
      url: '/defend',
      templateUrl: 'features/treat/defend/list.html',
      controller: defendController.controllerName,
      controllerAs: 'ctrl'
    });

};
