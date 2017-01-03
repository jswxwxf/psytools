'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.defend.DefendController';

class DefendController extends BaseController {

  static $inject = ['$scope', common.utilService.serviceName, services.defendService.serviceName];

  constructor(private $scope, private utilService: common.utilService.Service, private defendService: services.defendService.Service) {
    super($scope, utilService);
  }

}

export class Controller extends DefendController {}
