'use strict';

export var directiveName = 'wlDistortionPicker';

import controller = require('./distortion-picker-controller');

class DistortionPickerDirective implements angular.IDirective {

  restrict = 'E';
  scope = {};

  template = `
    <a href="javascript:void(0)" ng-click="ctrl.showPicker()" class="wl-distortion-switcher item item-icon-right">
      <ng-transclude></ng-transclude>
      <span class=item-note>{{ctrl.getDisplayText()}}</span>
      <i class="icon ion-chevron-right lcb-normal-font"></i>
    </a>
  `;

  replace = true;
  transclude = true;

  //require = ['ngModel', 'carSelector'];
  controller = controller.Controller;
  controllerAs = 'ctrl';
  bindToController = true;

  // <modelValue> → ngModelCtrl.$formatters(modelValue) → $viewValue
  //                                                        ↓
  // ↑                                                  $render()
  //                                                        ↓
  // ↑                                                  UI changed
  //                                                        ↓
  // ngModelCtrl.$parsers(newViewValue)    ←    $setViewValue(newViewValue)
  link = (scope: angular.IScope, el: angular.IAugmentedJQuery, attrs: any) => {
  }

}

export var Directive = [ '$injector', ($injector: angular.auto.IInjectorService) => {
  return $injector.instantiate(DistortionPickerDirective);
}];
