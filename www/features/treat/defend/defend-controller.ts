'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.defend.DefendController';

class DefendController extends BaseController {

  thought;

  static $inject = ['$scope', '$timeout', '$ionicScrollDelegate', common.utilService.serviceName, services.defendService.serviceName];

  constructor(private $scope, private $timeout, private $ionicScrollDelegate, private utilService: common.utilService.Service, private defendService: services.defendService.Service) {
    super($scope, utilService);
    super.setModalSrc('import', 'features/treat/defend/import.html');
    $scope.$on('modal.shown', () => {
      // $('#content').height($('#treat-defend-import-container').height() - 150);
    });
  }

  showImport() {
    this.showModal('import');
  }

}

export class Controller extends DefendController {}
