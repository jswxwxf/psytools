'use strict';

export import bdcService = require('./bdc-service');
export import defendService = require('./defend-service');
export import cordovaService = require('./cordova-service');
export import speechService = require('./speech-service');

export var load = (app: angular.IModule) => {
  app.service(bdcService.serviceName, bdcService.Service)
    .service(defendService.serviceName, defendService.Service)
    .service(cordovaService.serviceName, cordovaService.Service)
    .service(speechService.serviceName, speechService.Service);
};
