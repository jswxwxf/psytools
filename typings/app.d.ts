/// <reference path="./index.d.ts" />
/// <reference path="./lodash.d.ts" />

interface Window {
  StatusBar: any;
  Navigator: any;
  DeviceMotionEvent: any;
}

interface CordovaPlugins {
  Keyboard: any;
}

declare var jsyaml: any;

declare module TTS {

  interface IOptions {
    /** text to speak */
    text: string;
    /** a string like 'en-US', 'zh-CN', etc */
    locale?: string;
    /** speed rate, 0 ~ 1 */
    rate?: number;
  }

  function speak(options: IOptions, onfulfilled: () => void, onrejected: (reason) => void): void;

  function speak(text: string, onfulfilled: () => void, onrejected: (reason) => void): void;

}

