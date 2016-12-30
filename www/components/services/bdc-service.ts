'use strict';

import baseService = require('./base-service');
import common = require('../../utility/index');

export var serviceName = 'bdcService';

var _items = [
  { id: '1', name: '是否感到悲伤或情绪低落' },
  { id: '2', name: '是否觉得不快乐或忧伤' },
  { id: '3', name: '是否动不动就哭或眼泪汪汪' },
  { id: '4', name: '是否感到沮丧' },
  { id: '5', name: '是否感到无助' },
  { id: '6', name: '是否缺乏自尊' },
  { id: '7', name: '是否觉得自己没用或无能' },
  { id: '8', name: '是否有内疚感或羞耻感' },
  { id: '9', name: '是否自责自怨' },
  { id: '10', name: '是否优柔寡断' },
  { id: '11', name: '是否对家人、朋友或同事没兴趣' },
  { id: '12', name: '是否感到孤独' },
  { id: '13', name: '陪家人或朋友的时间是否很少' },
  { id: '14', name: '是否失去动力' },
  { id: '15', name: '是否对工作或其他活动都没兴趣' },
  { id: '16', name: '是否逃避工作或其他活动' },
  { id: '17', name: '是否觉得生活不快乐或不满足' },
  { id: '18', name: '是否感到疲倦' },
  { id: '19', name: '是否失眠或总是昏昏欲睡' },
  { id: '20', name: '是否食欲下降或上升' },
  { id: '21', name: '是否失去“性”趣' },
  { id: '22', name: '是否担心自己的健康情况' },
  { id: '23', name: '是否有任何自杀的念头' },
  { id: '24', name: '是否想结束生命' },
  { id: '25', name: '是否有自残计划' }
];

class BdcService extends baseService.Service {

  static $inject = ['$q', '$http', common.utilService.serviceName];

  constructor(private $q: angular.IQService, private $http: angular.IHttpService, public utilService) {
    super($q, $http, utilService);
  }

  getItems() {
    return _items;
  }

}

export class Service extends BdcService {}
