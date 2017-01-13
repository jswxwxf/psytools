'use strict';

import baseService = require('./base-service');
import common = require('../../utility/index');

export var serviceName = 'speechService';

class SpeechService extends baseService.Service {

  static $inject = ['$q', '$http', common.utilService.serviceName];

  constructor(private $q: angular.IQService, private $http: angular.IHttpService, public utilService) {
    super($q, $http, utilService);
  }

  speak(options: any) {
    if (angular.isString(options)) {
      options = { text: options };
    }
    options = angular.merge({
      locale: 'zh-CN',
      rate: 1.8
    }, options);
    return this.$q((resolve, reject) => {
      if (!window['TTS']) return reject('TTS not available!');
      TTS.speak(options, () => resolve('succeed!'), reason => reject(reason));
    });
  }

}

export class Service extends SpeechService {}
