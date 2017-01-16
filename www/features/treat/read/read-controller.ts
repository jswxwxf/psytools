'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.speak.ReadController';

class ReadController extends BaseController {

  static $inject = ['$scope', '$q', '$timeout', common.utilService.serviceName, services.speechService.serviceName, services.cordovaService.serviceName];

  constructor(private $scope, private $q, private $timeout, private utilService: common.utilService.Service, private speechService: services.speechService.Service, private cordovaService: services.cordovaService.Service) {
    super($scope, utilService);
  }

}

export class Controller extends ReadController {}
