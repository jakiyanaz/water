// Create an animation using GSAP
const animateheader = gsap.to('#mainhead', {
    fontSize: '24px',
    duration: 4,
    ease: 'power2.inOut'
})

const animatesubhead = gsap.to('#subhead', {
    fontSize: '50px',
    duration: 4,
    ease: 'power2.inOut'
})

const onscrollheader = gsap.to('#heading', {
    height: '100px',
    opacity: 0.9,
    duration: 2,
    backgroundColor: 'blue',
    paused: true
})

const onscrollpara1 = gsap.to('#para1img', {
    // x: -100,
    // scaleX: -2,
    height: '300px',
    width: '400px',
    // rotation: '360',
    duration: 5,
    ease: 'power2.out',
    paused: true
})

const para2scroll = gsap.fromTo('#paraimg2', { opacity: 2, scale: 0, rotation: 720 }, 
{ opacity: 1, scale: 1, rotation: 0, duration: 5 })

const timeline = gsap.timeline({ defaults: { duration: 1 }})
timeline
  .to('#innermiddle1', { display: 'flex', duration: 3, borderRadius: '10%'})
  .to('#vid1', {borderRadius: '20%', scale: 1.1, boxShadow: '3px 3px 4px', duration: 3})
  .to('#img1', {borderRadius: '20%', scale: 1.1, boxShadow: '3px 3px 4px', duration: 3})
  .to('#p1', {boxShadow: '3px 3px 4px', duration: 3})
//   .from('.link', { opacity: 0, stagger: .5 })
//   .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
//   .from('.left', { x: '-100%' }, '<.5')
//   .to('.footer', {  y: 0, ease: 'elastic' })
//   .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

//jhjhj
ScrollTrigger.create({
    trigger: '#heading',
    start: 'top top',
    animation: onscrollheader
})

ScrollTrigger.create({
    trigger: '#heading',
    start: 'top top',
    // top: '-20px',
    animation: onscrollpara1,
    onEnter: () => {
        onscrollpara1.play(); // Play the animation when entering the trigger
    },
})

ScrollTrigger.create({
    trigger: '#para2',
    start: 'top top',
    // top: '-20px',
    animation: para2scroll,
    onEnter: () => {
        onscrollpara1.play(); // Play the animation when entering the trigger
    },
})

ScrollTrigger.create({
    trigger: '#para1',
    start: 'bottom-=200px top',
    animation: timeline,
    onEnter: () => {
        timeline.play(); // Play the animation when entering the trigger
    },
})




/*
const innerMiddle = document.getElementById('innermiddle1');
const colors = ['aqua', 'purple', 'green', 'orange', 'blue']; // Array of colors
let currentIndex = 0; // Current index in the colors array

function changeColor() {
  gsap.to(innerMiddle, {
    backgroundColor: colors[currentIndex],
    duration: 2,
    onComplete: () => {
      currentIndex = (currentIndex + 1) % colors.length; // Move to the next color
      changeColor(); // Call the function recursively for continuous color change
    },
  });
}

changeColor(); // Start the color-changing animation
*/
