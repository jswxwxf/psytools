'use strict';

import common = require('../../../utility/index');
// import services = require('../../../components/services/index');
// import enums = require('../../../enums/index');

import readController = require('./read-controller');

export var load = (app: angular.IModule) => {
  app.controller(readController.controllerName, readController.Controller);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('treat.read', {
      url: '/read',
      templateUrl: 'features/treat/read/read.html',
      controller: readController.controllerName,
      controllerAs: 'ctrl'
    });

};
