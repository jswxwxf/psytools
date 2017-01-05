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

  dump;

  static $inject = ['$scope', '$q', '$timeout', '$ionicScrollDelegate', common.utilService.serviceName, services.defendService.serviceName];

  constructor(private $scope, private $q, private $timeout, private $ionicScrollDelegate, private utilService: common.utilService.Service, private defendService: services.defendService.Service) {
    super($scope, utilService);
    super.setModalSrc('thought', 'features/treat/defend/thought.html');
    super.setModalSrc('defend', 'features/treat/defend/defend.html');
    super.setModalSrc('export', 'features/treat/defend/export.html');
    $scope.$on('modal.shown', () => {
      // $('#content').height($('#treat-defend-import-container').height() - 150);
    });
  }

  showThought() {
    this.thought = { content: '' };
    this.showModal('thought');
  }

  saveThought() {
    var thought = jsyaml.load(this.thought.content);
    if (angular.isObject(thought)) {
      this.thoughts = thought;
    } else {
      thought = this.splitThoughts(thought);
      Array.prototype.push.apply(this.thoughts, this.splitThoughts(thought));
    }
    this.hideModal('thought');
  }

  splitThoughts(thought) {
    if (_.isEmpty(thought)) return [];
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

  exportThought() {
    this.dump = _.trimLeft(jsyaml.dump(angular.copy(this.thoughts)));
    this.showModal('export');
  }

}

export class Controller extends DefendController {}
