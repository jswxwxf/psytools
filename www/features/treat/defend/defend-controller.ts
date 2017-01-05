'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.defend.DefendController';

class DefendController extends BaseController {

  thoughts = [];
  thought;

  defend;

  static $inject = ['$scope', '$q', '$timeout', '$ionicScrollDelegate', common.utilService.serviceName, services.defendService.serviceName];

  constructor(private $scope, private $q, private $timeout, private $ionicScrollDelegate, private utilService: common.utilService.Service, private defendService: services.defendService.Service) {
    super($scope, utilService);
    super.setModalSrc('thought', 'features/treat/defend/thought.html');
    super.setModalSrc('defend', 'features/treat/defend/defend.html');
    $scope.$on('modal.shown', () => {
      // $('#content').height($('#treat-defend-import-container').height() - 150);
    });
  }

  showThought() {
    this.thought = { content: '' };
    this.showModal('thought');
  }

  saveThought() {
    Array.prototype.push.apply(this.thoughts, this.splitThoughts());
    this.hideModal('thought');
  }

  splitThoughts() {
    if (_.isEmpty(this.thought.content)) return [];
    return _.map(_.compact(this.thought.content.split('\n')), v => { return { content: v } });
  }

  showDefend(thought, defend = {}) {
    this.thought = thought;
    this.defend = defend;
    this.showModal('defend');
  }

  saveDefend() {
    if (!this.thought.defends) this.thought.defends = [];
    var found = _.find(this.thought.defends, 'distortion', this.defend.distortion);
    if (!found) this.thought.defends.push(this.defend);
    this.hideModal('defend');
  }

}

export class Controller extends DefendController {}
