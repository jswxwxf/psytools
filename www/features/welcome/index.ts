'use strict';

import config = require('../../config/config');
// import common = require('../../utility/index');
// import services = require('../../components/services/index');
// import enums = require('../../enums/index');

export var load = (app: angular.IModule) => {

};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'features/welcome/welcome.html',
    });

};
