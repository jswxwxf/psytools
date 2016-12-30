'use strict';

import common = require('../../../utility/index');
// import services = require('../../../components/services/index');
// import enums = require('../../../enums/index');

import bdcController = require('./bdc-controller');

export var load = (app: angular.IModule) => {
  app.controller(bdcController.controllerName, bdcController.Controller);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('treat.bdc', {
      url: '/bdc',
      templateUrl: 'features/treat/bdc/bdc.html',
      controller: bdcController.controllerName,
      controllerAs: 'ctrl'
    });

};
