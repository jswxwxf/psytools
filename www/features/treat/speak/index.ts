'use strict';

import common = require('../../../utility/index');
// import services = require('../../../components/services/index');
// import enums = require('../../../enums/index');

import speakController = require('./speak-controller');

export var load = (app: angular.IModule) => {
  app.controller(speakController.controllerName, speakController.Controller);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('treat.speak', {
      url: '/speak',
      templateUrl: 'features/treat/speak/speak.html',
      controller: speakController.controllerName,
      controllerAs: 'ctrl'
    });

};
