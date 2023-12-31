// showcaseTl = gsap[_0x511187(0x127)]({
//     'scrollTrigger': {
//         'trigger': _0x511187(0x189),
//         'start': _0x511187(0x15f),
//         'end': _0x511187(0x17b),
//         'scrub': 0x0
//     },
//     'ease': _0x511187(0x171)
// }),



// topBtn

let lastScroll = 0;

$(window).scroll(function(){

    let curr = $(this).scrollTop();

    if(curr < lastScroll){
        $('#topBtn').addClass('on');
    } else {
        $('#topBtn').removeClass('on');
    }
    lastScroll = curr;
})

$('#topBtn a').click(function(e){
    e.preventDefault();
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// 헤더 
ScrollTrigger.create({
    trigger:'body',
    start:"1000px 0%",
    end:"100% 100%",
    markers:false,
    onEnter:function(){
        $('.header').addClass('fixed')
    },
    onLeaveBack:function(){
        $('.header').removeClass('fixed')
    }
})


// intro
const intro = gsap.timeline();
intro
    .addLabel('a')
    .to(".sc-intro .text-bg", {backgroundColor:"rgba(0,0,0,0.6)", duration: 100},'a')
    .from(".sc-intro .t01", {autoAlpha: 0, duration: 100},'a')
    .to(".sc-intro .t01", {autoAlpha: 0, duration: 100},"+=1")
    .from(".sc-intro .t02", {autoAlpha: 0, duration: 100}, "+=1")
    .to(".sc-intro .t02", {autoAlpha: 0, duration: 100},"+=1")
    .from(".sc-intro .t03", {autoAlpha: 0, duration: 100}, "+=1")
    .to(".sc-intro .t03", {autoAlpha: 0, duration: 100},"+=1")
    .from(".sc-intro .t04", {autoAlpha: 0, duration: 100}, "+=1")
     
ScrollTrigger.create({
    animation: intro,
    trigger: ".sc-intro",
    start: "top top",
    end: "+=7000",
    scrub: true,
    pin: true,
    markers: false,
    toggleClass:{
        targets:"#topBtn", className:"hide"
    }
});

// showcase

const showcaseTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-showcase .group-showcase',
      start: 'top top',
      end: '500% top',
      pin: true,
      scrub: true,
      markers: true,
    }
  });

  showcaseTL.to('.sc-showcase .sticky .text-bg, .sc-showcase .text-box .text', {
    duration:2,
    opacity:1,
    ease: 'none',
  },0);

  showcaseTL.to('.sc-showcase .text-box .top', {
      duration:3,
      x:'100%',
      ease: 'none',
    },3);
    showcaseTL.to('.sc-showcase .text-box .bottom', {
        duration:3,
        x:'-100%',
        ease: 'none',
    },3);
    showcaseTL.to('.sc-showcase .sticky .text-bg', {
      duration:3,
      opacity:0,
      ease: 'none',
    },3);
    showcaseTL.to('.sc-showcase .text-box .top, .sc-showcase .text-box .middle, .sc-showcase .text-box .bottom', {
        duration:2,
        opacity: 0,
        ease: 'none',
    },6);

  showcaseTL.to('.sc-showcase .bg1', {
    duration:3,
    css: { 'clip-path': 'inset(0 0 100% 0)' },
    ease: 'none',
  },8);
  showcaseTL.to('.sc-showcase .bg2', {
    duration:3,
    css: { 'clip-path': 'inset(0 0 100% 0)' },
    ease: 'none',
  },11);


  showcaseTL.to('.sc-showcase .sticky .text-bg, .sc-showcase .desc', {
    duration:3,
    opacity:1,
    ease: 'none',
  },14);
  showcaseTL.to('.sc-showcase .sticky .text-bg, .sc-showcase .desc', {
    duration:8,
    opacity:1,
    ease: 'none',
  },17);
  

// worker
ScrollTrigger.create({
    trigger:".sc-worker",
    start: "top 10%",
    end:"100% 10%",
    markers: false,
    anticipatePin: 1,
    onEnter:function(){
        $('body').removeClass('dark')
    },
    onLeaveBack:function(){
        $('body').addClass('dark')
    }
})

// anyone
const Anyone = gsap.timeline();
Anyone
    .addLabel("a")
    .from(".sc-anyone .top-right-box",{xPercent:100, duration:10},"a")
    .from(".sc-anyone .bottom-left-box",{xPercent:-100, duration:10},"a")
    .to(".sc-anyone .p01",{xPercent:-165, duration:10},"a")
    .to(".sc-anyone .p03",{xPercent:130, duration:10},"a")

ScrollTrigger.create({
    animation:Anyone,
    trigger:".sc-anyone",
    start: "-10% center",
    end: "60% center",
    markers:false,
    scrub:1,
})

// talent
ScrollTrigger.create({
    trigger:".sc-talent",
    start: "top top",
    end: "100% 100%",
    pin:".title-area",
    markers:false,
    scrub:true,
})

// possibility
ScrollTrigger.create({
    trigger:".sc-possibility",
    start: "-15% 55%",
    end:"45% 55%",
    markers: false,
    onEnter:function(){
        $('body').addClass('dark')
    },
    onLeaveBack:function(){
        $('body').removeClass('dark')
    }
})

const possibility = gsap.timeline();
let horiWidth1 = $('.hori-area-01').width();
possibility
    .addLabel("a")
    .to('.sc-possibility .group-hori',{x:-horiWidth1, delay:0.1},"a")
ScrollTrigger.create({
    animation:possibility,
    trigger:".sc-possibility",
    start: "top top",
    end:"+=5000",
    pin:true,
    markers:false,
    scrub:true,
})

// banner01
const banner01 = gsap.timeline();
banner01
    .addLabel("a") 
    .from('.sc-banner01 .col-left',{x:-200, duration:5},"a")
    .from('.sc-banner01 .col-right',{x:200, duration:5},"a")
    .addLabel("b")
    .from(".sc-banner01 .text-area",{autoAlpha:0,duration:5,delay:1},"b")

ScrollTrigger.create({
    animation:banner01,
    trigger:".sc-banner01",
    start:"-10% 85%",
    end: "320% 85%",
    // markers:false,
    scrub:1,
})

// safety
let cardWidth = $('.card-list').width();

const safety = gsap.timeline();
safety
    .addLabel("a")
    .to(".sc-safety .group-hori",{x:-515,delay:5,duration:10},"a")
    
    .addLabel("b")
    .to(".sc-safety .group-hori .card-list",{x:-cardWidth+400,duration:10},"b")
    .to(".sc-safety .group-hori .card-item:nth-child(3)",{x:440,duration:10},"b")
    .to(".sc-safety .group-hori .card-item:nth-child(2)",{x:880,duration:10},"b")
    .to(".sc-safety .group-hori .card-item:nth-child(1)",{x:1320,duration:10},"b")
    .to(".sc-safety .ic-unlock",{autoAlpha:0,duration:3},"b")
    .from(".sc-safety .ic-lock",{autoAlpha:0,delay:1,duration:5},"b")
    .to(".sc-safety .group-hori .card-item",{autoAlpha:0,duration:5})
    .to(".sc-safety .ic-lock",{autoAlpha:0,duration:5})
    .from(".sc-safety .card-text",{autoAlpha:0})

    .addLabel("c")
    .from(".sc-safety .group-scroll",{autoAlpha:0},"c")
    .from(".sc-safety .group-scroll",{yPercent:100,y:"-200",duration:10,ease: "none"},"c")
    .from(".sc-safety .group-scroll .card-lock",{autoAlpha:0})
    .addLabel("d")
    .to(".sc-safety .group-scroll .card-item:nth-child(2)",{x:-440,duration:10},"d")
    .to(".sc-safety .group-scroll .card-item:nth-child(3)",{x:-880,duration:10},"d")
    .to(".sc-safety .group-scroll .card-item:nth-child(4)",{x:-1320,duration:10},"d")
    .addLabel("e")
    .from(".sc-safety .group-scroll .card-lock .light",{autoAlpha:0,duration:10},"e")
    .from(".sc-safety .group-scroll .end-text-box",{autoAlpha:0,duration:10},"e")

    
ScrollTrigger.create({
    animation:safety,
    trigger:".sc-safety",
    start:"top top",
    end: "+=9000",
    markers:false,
    scrub:true,
    pin:true,
    onEnter:function(){
        $('.sc-safety .group-hori .middle-area').addClass("fade");
    }
})

ScrollTrigger.create({
    trigger:".sc-safety .group-scroll ",
    start: `180% top`,
    end:"200% bottom",
    markers: false,
    onEnter:function(){
        $('.sc-safety .bg').addClass('blur')
        $('.sc-safety .group-scroll .middle-area').fadeIn();
    },
})

// change
ScrollTrigger.create({
    trigger:".sc-change",
    start: "-15% 55%",
    end:"45% 55%",
    markers: false,
    onEnter:function(){
        $('body').removeClass('dark')
    },
    onLeaveBack:function(){
        $('body').addClass('dark')
    }
})

// takeoff
const takeoff = gsap.timeline();
takeoff
    .addLabel("a")
    .from(".sc-takeoff .top-right-box",{xPercent:100, duration:10},"a")
    .from(".sc-takeoff .bottom-left-box",{xPercent:-100, duration:10},"a")
    .to(".sc-takeoff .p01",{xPercent:-115, duration:10},"a")
    .to(".sc-takeoff .p03",{xPercent:120, duration:10},"a")

ScrollTrigger.create({
    animation:takeoff,
    trigger:".sc-takeoff",
    start: "-10% center",
    end: "60% center",
    // markers:true,
    scrub:true,
})

//economy
const economy = gsap.timeline();

economy
    .addLabel("a")
    .to(".sc-economy .group-hori",{xPercent:-100,x:"100vw", delay:4, duration:10},"a")
    .from(".sc-economy .group-arrow",{autoAlpha:0,duration:10},"a")
    .from(".sc-economy .group-arrow .fade",{autoAlpha:0,delay:1,duration:10},"a")

ScrollTrigger.create({
    animation:economy,
    trigger:".sc-economy",
    start:"top top",
    end:"+=3000",
    pin:true,
    markers:false,
    scrub:true,
    onEnter:function(){
        $('.sc-economy .bg').addClass('blur')
    },
    onLeave:function(){
        $(".sc-economy .group-arrow").fadeOut();
    },
    onEnterBack:function(){
        $(".sc-economy .group-arrow").fadeIn();
    },
})
gsap.to(".sc-economy .bg", {
    filter: 'blur(40px)',
    scrollTrigger: {
        trigger: ".sc-economy .card-list",
        start: "160% top",
        end: "190% top",
        markers: true,
        scrub: true,
    }
});

//choi
const choi = gsap.timeline();

choi
    .from(".sc-choi .group-text",{autoAlpha:0,duration:5})
    .from(".sc-choi .group-icon",{autoAlpha:0,duration:1})
    .addLabel("a")
    .to(".sc-choi .group-text",{autoAlpha:0,duration:1},"a")
    .to(".sc-choi .group-icon",{autoAlpha:0,duration:1},"a")

ScrollTrigger.create({
    animation:choi,
    trigger:".sc-choi",
    start:"top top",
    end:"+=2000",
    pin:true,
    scrub:true,
})

//data
let dataWidth = $(window).width() 
                 - $(".sc-data .title-area").width() 
                 - $(".sc-data .card-list").width() 
                 - $(".sc-data .desc-area").width() 
                 - 500;
const data = gsap.timeline();
data
    .to(".sc-data .group-hori",{xPercent:-100,x:"100vw",delay:3, duration:10})
    
ScrollTrigger.create({
    animation:data,
    trigger:".sc-data",
    start:"top top",
    end:"+=3000",
    pin:true,
    scrub:true,
    onEnter:function(){
        $('.sc-data .middle-area').fadeIn();

    },
})

gsap.to(".sc-data .bg", {
    filter: 'blur(40px)',
    scrollTrigger: {
        trigger: ".sc-data .card-list",
        start: "120% top",
        end: "140% top",
        markers: true,
        scrub: true,
    }
});


ScrollTrigger.create({
    trigger: ".footer",
    start: "0% 100%",
    end: "110% 100%",
    scrub: true,
    markers: false,
    toggleClass:{
        targets:"#topBtn", className:"on2"
    },
    onEnter:function(){
        $('#topBtn a').addClass('fixed');
        $('.sc-banner02').addClass('on');
    },
    onLeaveBack:function(){
        $('#topBtn a').removeClass('fixed');
        $('.sc-banner02').removeClass('on');
    }
});