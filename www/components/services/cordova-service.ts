'use strict';

import baseService = require('./base-service');
import common = require('../../utility/index');

export var serviceName = 'cordovaService';

class CordovaService extends baseService.Service {

  static $inject = ['$q', '$http', common.utilService.serviceName];

  constructor(private $q: angular.IQService, private $http: angular.IHttpService, public utilService) {
    super($q, $http, utilService);
  }

  private _getInsomnia() {
    if (!window.plugins) return;
    if (!window.plugins.insomnia) return;
    return window.plugins.insomnia;
  }


  keepAwake() {
    return this.$q((resolve, reject) => {
      var insomnia = this._getInsomnia();
      if (!insomnia) return reject('insomnia not available!');
      insomnia.keepAwake();
      resolve('succeed');
    });
  }

  allowSleepAgain() {
    return this.$q((resolve, reject) => {
      var insomnia = this._getInsomnia();
      if (!insomnia) return reject('insomnia not available!');
      insomnia.allowSleepAgain();
      resolve('succeed');
    });
  }

}

export class Service extends CordovaService {}
