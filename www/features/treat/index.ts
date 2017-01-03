'use strict';

import config = require('../../config/config');
// import common = require('../../utility/index');
// import services = require('../../components/services/index');
// import enums = require('../../enums/index');

import bdc = require('./bdc/index');
import defend = require('./defend/index');

export var load = (app: angular.IModule) => {
  bdc.load(app);
  defend.load(app);
};

export var states = ($stateProvider: angular.ui.IStateProvider) => {

  $stateProvider
    .state('treat', {
      abstract: true,
      url: '/treat',
      template: '<ion-nav-view></ion-nav-view>'
    });

  bdc.states($stateProvider);
  defend.states($stateProvider);

};
