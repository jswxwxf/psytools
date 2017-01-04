'use strict';

import distortionPickerDirective = require('./distortion-picker/distortion-picker-directive');
import radioDirective = require('./radio/radio-directive');

export var load = (app: angular.IModule) => {
  app.directive(distortionPickerDirective.directiveName, distortionPickerDirective.Directive)
    .directive(radioDirective.directiveName, radioDirective.Directive);
};
