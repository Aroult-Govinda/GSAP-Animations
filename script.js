function section1_animation() {
  let tl = gsap.timeline();
  tl.from(".logo", {
    y: -50,
    duration: 0.5,
    delay: 0.1,
    opacity: 0,
  });
  tl.from(".links p", {
    y: -50,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3,
  });
  tl.from(".main-text h1, .main-text p", {
    x: -300,
    duration: 1,
    opacity: 0,
    stagger: 0.2,
  },"-=0.8");

  tl.from(".main-content .right", {
    x: 300,
    duration: 1,
    opacity: 0,
  },"-=0.8");

  tl.from(".main-text .button", {
    duration: 1,
    opacity: 0,
  });

  tl.from(".partners  img", {
    y: -50,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
  },"3.5");
}

section1_animation();

function section2_animation(){
  let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top -10%",
        scrub: 1
    }
})

tl2.from(".services .headline",{
    y: -50,
    duration: 0.1,
    opacity: 0,
})

tl2.from(".services .card .box.row1.odd",{
    x:-300,
    duration: 0.2,
    opacity: 0,
    stagger: 0.5,
},"row1")

tl2.from(".services .card .box.row1.even",{
    x:300,
    duration: 0.2,
    opacity: 0,
    stagger: 0.5,
},"row1")

tl2.from(".services .card .box.row2.odd",{
  x:-300,
  duration: 0.2,
  opacity: 0,
  stagger: 0.5,
},"row2")

tl2.from(".services .card .box.row2.even",{
  x:300,
  duration: 0.2,
  opacity: 0,
  stagger: 0.5,
},"row2")
}

section2_animation();

let tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".things-section",
      scroller: "body",
      // markers: true,
      start: "top 90%",
      end: "top -10%",
      scrub: 1
  }
})

tl3.from(".things-section",{
  y:-100,
  opacity:0,
  duration:0.1,
})

tl3.from(".things-section .left h1",{
  y:-50,
  duration:0.1,
  opacity:0,
},"anim")

tl3.from(".things-section .left p",{
  y:-50,
  duration:0.1,
  opacity:0,
},"anim")


tl3.from(".things-section .right img",{
  x:300,
  duration:0.1,
  opacity:0,
},"anim")

tl3.from(".things-section .left span",{
  opacity:0,
},"anim2")

let tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:".case-study",
      scroller: "body",
      // markers: true,
      start: "top 100%",
      end: "top -10%",
      scrub: 1
  }
})

tl4.from(".case-study .headline",{
  y: -40,
  duration: 0.1,
  opacity: 0,
})

tl4.from(".card-section",{
  y: -40,
  opacity: 0,
})