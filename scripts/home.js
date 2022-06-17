/* global gsap */

import { common } from './common.js';

/* Show page when ready */
function onReady() {
  common.init();
  common.showHeaderAndButton();

  /************** Init Animations*****************/
  let theCircleSize = document.querySelector('.thecircle').offsetHeight;
  let offsetSize = theCircleSize / 2;
  function getXY(el = '.you1') {
    let x = 100;
    let y = 100;
    let you1 = document.querySelector(el);
    x = you1 ? you1.getBoundingClientRect().left - offsetSize : 0;
    y = you1 ? you1.getBoundingClientRect().top - offsetSize + window.scrollY : 0;
    // console.log('getXY', x, y);
    return [x, y];
  }


  /************** 1. Are You Mad? *****************/
  gsap.set('.panel-areyoumad .fist, .panel-areyoumad h1 div', {
    opacity: 0,
  });

  const tl = gsap.timeline(0);
  tl.set('.panel-areyoumad .line1', {
    opacity: 1,
  })

    .from('.panel-areyoumad .stairs', {
      ease: 'sine.out',
      y: '-4rem',
      x: '-2rem',
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
    })
    .from('.panel-areyoumad .line1', {
      duration: 2,
      ease: 'steps(4)',
      x: '-35rem',
      delay: -0.8,
    })
    .set('.panel-areyoumad .line2', {
      opacity: 1,
    })
    .from('.panel-areyoumad .line2', {
      duration: 2,
      ease: 'steps(4)',
      x: '35rem',
      delay: -1.5,
    })
    .set('.panel-areyoumad .line3', {
      opacity: 1,
    })
    .from('.panel-areyoumad .line3', {
      duration: 2,
      ease: 'steps(4)',
      x: '-35rem',
      delay: -1.5,
    })
    .set('.panel-areyoumad .line4', {
      opacity: 1,
    })
    .from('.panel-areyoumad .line4', {
      duration: 2,
      ease: 'steps(4)',
      x: '35rem',
      delay: -1.5,
    })
    .set('.panel-areyoumad .fist', {
      opacity: 1,
    }).from('.panel-areyoumad .gal, .panel-areyoumad .ball0, .panel-areyoumad .arrow-r-b, .panel-areyoumad .phone', {
      duration: 0.4,
      opacity: 0,
    })
    .from('.panel-areyoumad .fist', {
      duration: 2,
      stagger: {
        amount: 1,
      },
      ease: 'steps(5)',
      y: '5rem',
      delay: -1,
    });

  /************** 2. Because *****************/
  const tl0 = gsap.timeline({
    scrollTrigger: {
      trigger: '.panel-because',
      start: 'top 95%',
      end: 'top 40%',
      scrub: true,
      // markers: true,
      id: 'arrow',
    },
  });

  tl0
    .to('.arrow-mask', {
      ease: 'linear',
      height: '23rem',
      duration: 5,
    })
    .from('.panel-because .text-large h2', {
      duration: 1,
      stagger: {
        amount: 1,
      },
      ease: 'linear',
      y: '-3rem',
      opacity: 0,
      delay: '-0.5',
    }).from('.panel-because .cube', {
      duration: 0.4,
      x: '6rem',
      opacity: 0,
      delay: '-0.5',
    });

  const tl01 = gsap.timeline({
    scrollTrigger: {
      trigger: '.panel-because',
      toggleActions: 'play none none reverse',
      start: 'top 35%',
      end: 'top 20%',
      // markers: true,
      id: 'because',
    },
  });

  tl01
    .from('.panel-because .laptop', {
      duration: 0.5,
      ease: 'back.in',
      opacity: 0,
      left: '-6rem',
    })
    .from('.panel-because .book1', {
      duration: 0.5,
      ease: 'back.in',
      right: '-10%',
    });

  /************** 3. Real change *****************/

  /************** 4. You!  *****************/

  /* Ball enter  */
  let [x1, y1] = getXY('.you1');
  gsap.to('.thecircle', {
    duration: 0,
    opacity: 1,
    x: '-15rem',
    y: y1,
  });

  gsap.to('.thecircle', {
    scrollTrigger: {
      trigger: '.panel-realchange',
      // toggleActions: 'play none none reverse',
      start: 'top 50%',
      end: 'center 45%',
      id: 'ball-enter',
      // markers: true,
    },
    opacity: 1,
    x: x1,
  });

  /* Ball drop  */
  let [x2, y2] = getXY('.you2');
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.you2',
      // toggleActions: 'restart pause reverse pause',
      start: 'center center',
      // id: 'ball-drop',
      // markers: true,
    },
  });
  tl1
    .to('.thecircle', {
      y: y2,
      duration: 1,
      ease: 'bounce.out',
    })
    .to('.thecircle', {
      duration: 1,
      ease: 'bounce.out',
      // x: '28.5rem',
      x: x2,
    });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.panel-you',
      // toggleActions: 'restart pause reverse pause',
      start: 'top 10%',
      // end: 'top top',
      // scrub: true,
      // markers: true,
      id: 'you-texts',
    },
  });

  tl2
    .from('.panel-you .text1 li', {
      duration: 1.8,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
      xPercent: -100,
      opacity: 0,
      skewX: 10,
    })
    .from('.panel-you .text2 span', {
      duration: 1.8,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
      xPercent: -100,
      opacity: 0,
      skewX: 10,
      delay: -1,
    }).from('.panel-you .cube', {
      duration: 0.8,
      ease: 'back.out',
      y: '12rem',
      opacity: 0,
    });

  /************** 3. Life changing!  *****************/
  /* Ball motion  */
  let [x3, y3] = getXY('.you3');
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.you3',
      // toggleActions: 'restart pause reverse pause',
      start: 'center center',
      id: 'ball-U3',
      // markers: true,
    },
  });

  tl3
    .to('.thecircle', {
      y: y3,
      duration: 1,
      ease: 'bounce.out',
    })
    .to('.thecircle', {
      duration: 1,
      ease: 'bounce.out',
      x: x3,
    });

  let [x4, y4] = getXY('.you4');
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.you4',
      // scrub: true,
      // toggleActions: 'restart pause reverse pause',
      start: 'top 62%',
      id: 'ball-world',
      // markers: true,
    },
  });

  tl4
    .to('.thecircle', {
      duration: 1,
      ease: 'bounce.out',
      y: y4,
    })
    .to('.thecircle', {
      x: x4,
      duration: 1,
      ease: 'bounce.out',
    })
    .to('.thecircle', {
      scale: 2.7,
      duration: 1,
    })
    .from('.globe', {
      opacity: 0,
      delay: '-0.2',
    })
    .from('.panel-lifechange h3 span', {
      stagger: {
        amount: -0.4,
      },
      ease: 'bounce.out',
      // opacity: 0,
      rotate: 0,
      scale: '.8',
      delay: '-1',
    });

  /************** End card!  *****************/

  gsap.from('.panel-end .fist', {
    stagger: {
      amount: 1,
    },
    ease: 'steps(4).inOut',
    duration: 0,
    yoyo: true,
    repeat: -1,
    repeatDelay: 1,
    opacity: 0,
  });
}

window.onload = function () {
  onReady();
};
