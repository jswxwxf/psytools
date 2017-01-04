'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
import {BaseController} from "../../../utility/base-controller";

class DistortionPickerController extends BaseController {

  distortions;
  selectedDistortion;

  static $inject = ['$q', '$scope', common.utilService.serviceName, services.defendService.serviceName];

  constructor(private $q, public $scope, private utilService: common.utilService.Service, defendService: services.defendService.Service) {
    super($scope, utilService);
    super.setModalSrc('distortions', 'components/directives/distortion-picker/distortions.html');
    this.distortions = defendService.getDistortions();
  }

  showPicker() {
    this.showModal('distortions');
  }

  padKey(k) {
    return _.padLeft(k, 3, '0');
  }

  renderValue(v) {
    if (_.isEmpty(v)) return;
    var ret = [];
    var arr = _.compact(v.split('\n'));
    for (let a of arr) {
      ret.push(`<p>${a}</p>`);
    }
    return ret.join('');
  }

}

export class Controller extends DistortionPickerController {}
