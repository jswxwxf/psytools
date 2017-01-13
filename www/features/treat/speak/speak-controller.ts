'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.speak.SpeakController';

class SpeakController extends BaseController {

  content;
  pauseLength = 5;

  toRead: any[];
  reading;

  static $inject = ['$scope', '$q', '$timeout', common.utilService.serviceName, services.speechService.serviceName];

  constructor(private $scope, private $q, private $timeout, private utilService: common.utilService.Service, private speechService: services.speechService.Service) {
    super($scope, utilService);
  }

  speak() {
    this.toRead = _.compact(this.content.split('\n\n'));
    this._speak();
  }

  _speak() {
    this.reading = this.toRead.shift();
    if (!this.reading) return;
    this.speechService.speak(this.reading).then(done => {
      this.$timeout(() => this._speak(), this.pauseLength * 1000); // 等两秒读下一句
    }).catch(reason => {
      this.utilService.alert(reason);
    });
  }

}

export class Controller extends SpeakController {}
