'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
import {BaseController} from "../../../utility/base-controller";

class DistortionPickerController extends BaseController {

  distortions;
  selectedDistortion;
  _selectedDistortion;

  describeDistortion;

  static $inject = ['$q', '$scope', '$ionicScrollDelegate', common.utilService.serviceName, services.defendService.serviceName];

  constructor(private $q, public $scope, private $ionicScrollDelegate, private utilService: common.utilService.Service, private defendService: services.defendService.Service) {
    super($scope, utilService);
    super.setModalSrc('distortions', 'components/directives/distortion-picker/distortions.html');
    super.setModalSrc('description', 'components/directives/distortion-picker/description.html');
    this.distortions = _.indexBy(this.defendService.getDistortions(), 'name');
    $scope.$on('modal.shown', () => {
      this.$ionicScrollDelegate.$getByHandle('distortion-handle').scrollTop(true);
      this.$ionicScrollDelegate.$getByHandle('description-handle').scrollTop(true);
    });
  }

  showPicker() {
    this.showModal('distortions');
  }

  showDescription(distortion) {
    this.describeDistortion = distortion;
    this.showModal('description');
  }

  cancel() {
    this._selectedDistortion = this.selectedDistortion;
    this.hideModal('distortions');
  }

  reset() {
    this._selectedDistortion = null;
    this.selectedDistortion = null;
  }

  setDistortion(distortion?) {
    if (distortion) this._selectedDistortion = distortion;
    this.selectedDistortion = this._selectedDistortion;
    this.hideModal('distortions');
  }

  getDisplayText() {
    if (!this.selectedDistortion) return '请选择';
    return this.distortions[this.selectedDistortion].name;
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
