'use strict';

import baseService = require('./base-service');
import common = require('../../utility/index');

export var serviceName = 'defendService';

class DefendService extends baseService.Service {

  static $inject = ['$q', '$http', common.utilService.serviceName];

  constructor(private $q: angular.IQService, private $http: angular.IHttpService, public utilService) {
    super($q, $http, utilService);
  }

}

export class Service extends DefendService {}
