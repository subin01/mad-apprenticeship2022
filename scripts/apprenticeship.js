/* global gsap */

import { common } from './common.js';

const Accordion = {
  init() {
    document.querySelector(".accordion").addEventListener("click", this.accordionClickHandler);
    const allContents = document.querySelectorAll('.accordion-content');
    allContents.forEach(function (item) {
      item.setAttribute('data-height', item.scrollHeight + 'px')
    })
  },

  accordionClickHandler(event) {
    if (event.target.nodeName === 'BUTTON') {

      const allContents = document.querySelectorAll('.accordion-item');
      const targetId = event.target.getAttribute('data-target');
      const currentContent = document.querySelector(targetId);

      allContents.forEach(function (item) {
        const content = item.querySelector('.accordion-content');
        if (currentContent === content) {
          item.classList.toggle('active')
          content.style.height = content.offsetHeight === 0 ? content.getAttribute('data-height') : '0';
        } else {
          content.style.height = 0;
          item.classList.remove('active')
        }
      }
      );
    }
  }
}


/* Show page when ready */
function onReady() {
  common.init();
  common.showHeaderAndButton();
  Accordion.init();

  /************** Init Animations*****************/


  // gsap.from('h2', {
  //   duration: 2,
  //   opacity: 0,
  //   x: '-15rem',
  // });


  /************** Skills *****************/
  gsap.from('.panel-skills .text', {
    scrollTrigger: {
      trigger: '.panel-skills .text',
      toggleActions: 'play none none reverse',
      start: 'top 85%',
      end: 'top 10%',
      // scrub: 0.5,
      // markers: true,
      id: 'skills',
    },
    ease: 'sine.out',
    y: '4rem',
    opacity: 0,
    duration: 0.8,
  });


  gsap.from('.panel-skills .stairs', {
    scrollTrigger: {
      trigger: '.panel-skills .stairs',
      toggleActions: 'play none none reverse',
      start: 'top 70%',
      end: 'top 10%',
      // scrub: 0.5,
      // markers: true,
      id: 'stairs',
    },
    ease: 'sine.out',
    y: '-4rem',
    x: '-2rem',
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
  });


  /************** accordion *****************/
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.panel-accordion',
        toggleActions: 'play none none reverse',
        start: 'top 70%',
        end: 'top 50%',
        // scrub: 0.5,
        // markers: true,
        id: 'panel-accord',
      }
    })
    .from('.panel-accordion .headings', {
      ease: 'sine.out',
      y: '3rem',
      opacity: 0,
      duration: 0.8,
    })
    .from('.panel-accordion .fist', {
      duration: 0.01,
      ease: 'steps(4).inOut',
      opacity: 0,
      stagger: 0.2,
    })
    .from('.panel-accordion .fist', {
      duration: 0.8,
      ease: 'steps(4).inOut',
      y: '3rem',
      stagger: 0.2,
    })
    .from('.panel-accordion .ball1', {
      duration: 0.8,
      ease: 'sine.out',
      opacity: 0,
      x: '12rem',
    });


  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.accordion',
        toggleActions: 'play none none reverse',
        start: 'top 80%',
        end: 'top 70%',
        // scrub: 0.5,
        // markers: true,
        id: 'accordion',
      }
    })
    .from('.accordion .accordion-item', {
      ease: 'sine.out',
      y: '6rem',
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
    });

}

window.onload = function () {
  onReady();
};

