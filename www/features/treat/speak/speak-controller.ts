'use strict';

import common = require('../../../utility/index');
import services = require('../../../components/services/index');
// import models = require('../../../components/models/index');
import {BaseController} from "../../../utility/base-controller";

export var controllerName = 'treat.speak.SpeakController';

class SpeakController extends BaseController {

  articles;
  article;

  content;
  pauseLength = 3;

  toRead: any[];
  reading;
  started = false;

  timer;

  static $inject = ['$scope', '$q', '$timeout', common.utilService.serviceName, services.speechService.serviceName, services.cordovaService.serviceName];

  constructor(private $scope, private $q, private $timeout, private utilService: common.utilService.Service, private speechService: services.speechService.Service, private cordovaService: services.cordovaService.Service) {
    super($scope, utilService);
    this.articles = speechService.getArticles();
    $scope.$watch(() => this.article, this.articleChanged.bind(this))
  }

  articleChanged(newVal, oldVal) {
    if (!newVal) return;
    this.content = newVal.content;
  }

  stop() {
    this.started = false;
    this.cordovaService.allowSleepAgain();
    if (this.timer) this.$timeout.cancel(this.timer);
    this.speechService.speak('');
  }

  speak() {
    if (!this.content) return;
    this.started = true;
    this.cordovaService.keepAwake();
    this.toRead = _.compact(this.content.split('\n\n'));
    this._speak();
  }

  _speak() {
    if (!this.started) return;
    this.reading = this.toRead.shift();
    if (!this.reading) {
      // 读结束了
      this.cordovaService.allowSleepAgain();
      this.started = false;
      return;
    }
    this.speechService.speak(this.reading).then(done => {
      this.timer = this.$timeout(() => this._speak(), this.pauseLength * 1000); // 等两秒读下一句
    }).catch(reason => {
      this.started = false;
      this.utilService.alert(reason);
    });
  }

}

export class Controller extends SpeakController {}
