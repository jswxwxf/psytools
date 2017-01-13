'use strict';

import baseService = require('./base-service');
import common = require('../../utility/index');

export var serviceName = 'speechService';

var _articles = [
  {
    id: 10,
    name: `冥想：身体扫描禅修训练`,
    content:
`1. 选择一个温暖舒适且不受打扰的地方仰卧躺下。你可以躺在床上，也可以直接躺在地板上或者地毯上。如果你感到舒服，也可以裹一块毯子。闭上双眼可能感觉比较好，但是如果你不想这样也没关系。假如练习过程中感到昏昏欲睡，可随时睁开眼睛。

2. 花一点儿时间将意识集中到你身体的某些部位，尤其是仰卧时与你身体接触或感觉有压力的部位。每次呼气时，让身体稍稍向下压入支撑表面。

3. 温和地提醒自己，这段时间要保持清醒，不要入睡。在此期间，你要充分关注自己的真实感受，而不是你认为它应该怎么样。不要试图改变自己的感受形式，不要刻意尝试让自己更加放松或者更加平静。这个练习的目的是，将注意力系统地放在身体的每个部位时，某些或全部身体感觉融入其中。有时，你可能发现毫无感觉。如果出现这种情况，仅仅注意这一事实即可。当没有感觉时，没有必要主观地努力想象。

4. 现在，将意念引导到你的腹部，注意气息进出身体时腹壁的变化形式。花一点儿时间感受呼气吸气时腹部起伏产生的身体感觉。

5. 连接腹部的感觉之后，像聚光灯那样将意念集中起来，让它沿身体向下移动至双腿、双脚，一直到脚趾。让注意力的焦点逐一放在每个脚趾上，并赋予它们一种温和而带有兴趣的关注，探索这种感觉。你可能注意到脚趾之间存在某种联系，一种麻刺感、温暖感、麻木感，或者什么感觉都没有。无论你有什么感觉均属正常。没有必要进行判断，尝试让感觉自由运行。

6. 吸气时，感觉并想象气息能够进入肺部，然后一直沿身体下行，通过双腿抵达脚趾。呼气时，感觉并想象气息从脚趾、双脚、身体流过，最后从鼻孔排出。集中精力继续关注呼吸。你可能觉得不太容易掌握这一练习，不过没有关系，你只需以娱乐的方式尽力一试即可。

7. 做好准备之后，呼气时，将注意力从脚趾转移到脚心。让意识以温和和感知的方式集中到脚心。然后，让意念转移到每只脚的脚背和脚跟。你可能注意到，脚跟与地垫和床面接触的地方有一种轻微的压迫感。尝试让气息进入你感觉到的所有部位，当你探索脚底的感受时，注意运行中的气息。

8. 让意念扩展到脚的其他部位，进入脚的顶部、脚踝、骨头和关节。然后，更为专注地深吸一口气，让气息进入双脚。呼气时，让气息完全离开双脚，让意念集中到小腿。

9. 继续以同样方式扫描整个身体的其他部位，依次在每个部位停留一会儿。意念在小腿停留后，向上移动到膝盖，然后再到大腿。

现在，再将意念转移到骨盆--你的腹股沟、外阴部、臀部和胯骨。

注意你的后背底部、腹部、后背上部，

最后再将意念转移到胸部和双肩。

慢慢将意念转移到双手。将注意力放到双手后，你可以先关注指尖的感觉，然后是整个手指，手掌和手背。

然后，慢慢地转移到手腕、前臂、肘部、上臂、肩膀和腋窝。

然后，将意念转移到脖子、面部（下颚、嘴、嘴唇、鼻子、双颊、双耳、双眼和前额），然后让你的整个头部置于全部意念之中。

10. 你应该让意念在身体的每个区域停留20~30秒钟。不过，没有必要精确计算时间和呼吸次数，只需让注意力依次集中在身体的每个部位，时间长短自己决定。

11. 当你注意到身体某个部位存在较为强烈的感觉，例如压力，尝试让气息“进入”这些部位，深入感知。利用吸入的气息温和地将意念融入感觉。然后，呼气时，注意感觉变化--如果有的话。

12. 有时，你的意念会不可避免地离开你的气息和身体，这非常正常。当你注意到这种情况时，只是温和地承认这一事实，在脑海中记下意念转移到了什么地方，然后温和地引导它重新返回你原来关注的部位。

13. 当你以这种方式扫描完整个身体之后，用一点儿时间让自己想象身体是一个有机的整体。感受这种完整感，试着让所有游移的感觉进入宽敞的意识之中，感受气息自由进出身体的过程。
要记住，身体扫描可以产生极为放松的感觉，所以在练习过程中很容易睡着。如果发生了这种情况，没有必要责备自己。如果你发现自己总是入睡，可以在脑袋下放一个枕头，让头部微微抬起，睁开双眼。当然，你也可以不再采用卧姿，坐着练习。`
  }
];

class SpeechService extends baseService.Service {

  static $inject = ['$q', '$http', common.utilService.serviceName];

  constructor(private $q: angular.IQService, private $http: angular.IHttpService, public utilService) {
    super($q, $http, utilService);
  }

  speak(options: any) {
    if (angular.isString(options)) {
      options = { text: options };
    }
    options = angular.merge({
      locale: 'zh-CN',
      rate: 1.8
    }, options);
    return this.$q((resolve, reject) => {
      if (!window['TTS']) return reject('TTS not available!');
      TTS.speak(options, () => resolve('succeed!'), reason => reject(reason));
    });
  }

  browserSpeak(textToSpeak) {

    // Create a new instance of SpeechSynthesisUtterance
    var newUtterance = new SpeechSynthesisUtterance();

    newUtterance.pitch = 1;
    newUtterance.rate = 1.8;
    newUtterance.lang = 'zh-CN';

    // Set the text
    newUtterance.text = textToSpeak;

    // Add this text to the utterance queue
    speechSynthesis.speak(newUtterance);

  }

  getArticles() {
    return _articles;
  }

}

export class Service extends SpeechService {}
