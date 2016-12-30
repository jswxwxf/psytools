'use strict';

export import bdcService = require('./bdc-service');

export var load = (app: angular.IModule) => {
  app.service(bdcService.serviceName, bdcService.Service);
};
