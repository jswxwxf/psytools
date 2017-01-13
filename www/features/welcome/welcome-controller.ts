'use strict';

import common = require('../../utility/index');
import services = require('../../components/services/index');
// import models = require('../../components/models/index');
import {BaseController} from "../../utility/base-controller";

export var controllerName = 'welcome.WelcomeController';

class WelcomeController extends BaseController {

  static $inject = ['$scope', common.utilService.serviceName, services.speechService.serviceName];

  constructor(private $scope, private utilService: common.utilService.Service, private speechService: services.speechService.Service) {
    super($scope, utilService);
  }

}

export class Controller extends WelcomeController {}
