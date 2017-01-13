'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.speak.SpeakController';

class SpeakController extends BaseController {

  content;

  static $inject = ['$scope', '$q', '$timeout', common.utilService.serviceName, services.speechService.serviceName];

  constructor(private $scope, private $q, private $timeout, private utilService: common.utilService.Service, private speechService: services.speechService.Service) {
    super($scope, utilService);
  }

  speak() {
    this.speechService.speak(this.content).catch(reason => {
      this.utilService.alert(reason);
    });
  }

}

export class Controller extends SpeakController {}
