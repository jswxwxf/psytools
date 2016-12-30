'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.bdc.BdcController';

class BdcController extends BaseController {

  items;
  scores = {};

  static $inject = ['$scope', common.utilService.serviceName, services.bdcService.serviceName];

  constructor(private $scope, private utilService: common.utilService.Service, private bdcService: services.bdcService.Service) {
    super($scope, utilService);
    this.items = bdcService.getItems();
  }

  getTotalScore() {
    return _.sum(_.values(this.scores));
  }

  getResult() {
    if (this.getTotalScore() <= 5) return '无抑郁';
    if (this.getTotalScore() <= 10) return '正常程度，但情绪有点低落';
    if (this.getTotalScore() <= 25) return '轻微抑郁';
    if (this.getTotalScore() <= 50) return '中度抑郁';
    if (this.getTotalScore() <= 75) return '严重抑郁';
    return '极度抑郁';
  }

}

export class Controller extends BdcController {}
