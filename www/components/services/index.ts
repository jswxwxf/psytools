'use strict';

export import bdcService = require('./bdc-service');
export import defendService = require('./defend-service');

export var load = (app: angular.IModule) => {
  app.service(bdcService.serviceName, bdcService.Service)
    .service(defendService.serviceName, defendService.Service);
};
