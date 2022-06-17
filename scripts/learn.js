/* global gsap */

import { common } from './common.js';

/* Show page when ready */
function onReady() {
  common.init();
  common.showHeaderAndButton();


  /************** Init Animations*****************/


  // gsap.from('h2', {
  //   duration: 2,
  //   opacity: 0,
  //   x: '-15rem',
  // });


  /************** Who are they *****************/
  const tl0 = gsap.timeline({
    scrollTrigger: {
      trigger: '.panel-whoarethey',
      start: 'top 60%',
      end: 'top 30%',
      scrub: 0.5,
      // markers: true,
      id: 'broom',
    },
  });

  tl0
    .to('.broomed .mask', {
      ease: 'linear',
      width: '100%',
      duration: 3,
    })
    .to('.broomed .broom', {
      ease: 'linear',
      css: {
        left: '100%'
      },
      duration: 3,
      delay: -3,
    })
    .to('.broomed .broom', {
      ease: 'linear',
      rotate: 20,
      duration: 1,
    });




  /************** The truth *****************/

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.panel-thetruth',
        toggleActions: 'play none none reset',
        start: 'top 80%',
        end: 'top 70%',
        // scrub: 0.5,
        // markers: true,
        id: 'truth',
      }
    })

    .from('.two-col-v1 > div', {
      opacity: 0,
      duration: 0.4,
    })
    .from('.panel-thetruth .two-col-v1 > div:first-child', {
      ease: 'bounce.out',
      x: '-6rem',
      duration: 0.8,
      delay: -0.4,
      // stagger: 0.2,
    }).from('.panel-thetruth .two-col-v1 > div:last-child', {
      ease: 'bounce.out',
      x: '6rem',
      duration: 0.8,
      // stagger: 0.2,
      delay: -0.8,
    })
    .from('.panel-thetruth .laptop', {
      opacity: 0,
      duration: 0.4,
    })
    .from('.panel-thetruth .laptop', {
      ease: 'sine.out',
      x: '-6rem',
      duration: 0.6,
      delay: -0.4,
    });



  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.truth-banner',
        toggleActions: 'play none none reverse',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        // markers: true,
        id: 'truth-banner',
      }
    })
    .from('.truth-banner .globe-wrap', {
      y: '6rem',
      duration: 0.8,
    });


  gsap.from('.truth-banner .fist', {
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


  /************** The Program *****************/

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.panel-theprogram .bottom',
        toggleActions: 'play none none reverse',
        start: 'top 75%',
        end: 'top 60%',
        // scrub: 0.5,
        // markers: true,
        id: 'theprogram',
      }
    })
    .from('.panel-theprogram .bottom h3, .panel-theprogram .links h2', {
      ease: 'sine.out',
      y: '8rem',
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
    });

}

window.onload = function () {
  onReady();
};

