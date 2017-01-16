'use strict';

import config = require('../../config/config');
// import common = require('../../utility/index');
// import services = require('../../components/services/index');
// import enums = require('../../enums/index');

import bdc = require('./bdc/index');
import defend = require('./defend/index');
import speak = require('./speak/index');
import read = require('./read/index');

export var load = (app: angular.IModule) => {
  bdc.load(app);
  defend.load(app);
  speak.load(app);
  read.load(app);
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
  speak.states($stateProvider);
  read.states($stateProvider);

};
