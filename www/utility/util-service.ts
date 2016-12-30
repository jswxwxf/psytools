'use strict';

import {Utils} from "./index";
import {Config} from "../config/config";

export var serviceName = 'utilService';

class UtilService {

  static $inject = ['$q', '$rootScope', '$ionicLoading', '$ionicModal', '$ionicPopover', '$ionicPopup', '$ionicHistory', '$state', '$cookies', '$window', '$location'];

  constructor(
    private $q: angular.IQService,
    private $rootScope: angular.IRootScopeService,
    private $ionicLoading: ionic.loading.IonicLoadingService,
    private $ionicModal: ionic.modal.IonicModalService,
    private $ionicPopover: ionic.popover.IonicPopoverService,
    private $ionicPopup: ionic.popup.IonicPopupService,
    private $ionicHistory: ionic.navigation.IonicHistoryService,
    private $state: angular.ui.IStateService,
    private $cookies,
    private $window: angular.IWindowService,
    private $location: angular.ILocationService) { }

  showSpinner(message?, ops = {}) {
    if (message) ops['template'] = message;
    ops = angular.extend({
      // delay: 500
    }, ops);
    this.$ionicLoading.show(ops);
  }

  hideSpinner() {
    this.$ionicLoading.hide();
  }

  /**
   * 各种弹窗
   */

  showPopover(popover: ionic.popover.IonicPopoverController, url, scope, $event) {
    var deferred = this.$q.defer();
    if (popover) {
      popover.show($event);
      return deferred.promise;
    }
    this.$ionicPopover.fromTemplateUrl(url, { scope: scope }).then((ctrl: ionic.popover.IonicPopoverController) => {
      deferred.resolve(ctrl);
      scope.$on('$destroy', function() {
        ctrl['remove']();
      });
      ctrl.show($event);
    });
    return deferred.promise;
  }

  showModal(modal: ionic.modal.IonicModalController, url, scope, options: any = {}) {
    var deferred = this.$q.defer();
    if (modal) {
      modal.show();
      return deferred.promise;
    }
    if (!options.scope) options.scope = scope;
    this.$ionicModal.fromTemplateUrl(url, options).then((ctrl: ionic.modal.IonicModalController) => {
      deferred.resolve(ctrl);
      scope.$on('$destroy', function() {
        ctrl['remove']();
      });
      ctrl.show();
    });
    return deferred.promise;
  }

  confirm(message, title = '开开保', opt = {}) {
    opt = angular.merge({
      title: title,
      template: message,
      okText: '确定',
      cancelText: '取消'
    }, opt);
    return this.$ionicPopup.confirm(opt);
  }

  alert(message, opt: any = {}) {
    var title = opt.title;
    if (title == undefined) {
      title = message;
      message = '';
    }
    return this.$ionicPopup.alert(angular.extend({
      title,
      template: message,
      okText: '确定'
    }, opt));
  }

  popup(opt = {}, ctrl) {
    return this.$ionicPopup.show(angular.extend({
      title: '开开保',
      buttons: [{
          text: '取消',
          type: "button-stable",
          onTap: () => ctrl.cancel()
        }, {
          text: '确定',
          type: "button-positive",
          onTap: () => ctrl.ok()
        }
      ]
    }, opt));
  }

}

export class Service extends UtilService {}
