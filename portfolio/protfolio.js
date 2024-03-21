gsap.from("nav h2,nav li",{
    y:-100,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
    opacity:0
})
gsap.from(".box",{
    y:100,
    duration:1,
    delay:0.8,
    // stagger:0.5,
    opacity:0
})
gsap.from(".info h2,.info h3,.info h1,.info p",{
    y:100,
    duration:1,
    delay:1,
    stagger:0.5,
    opacity:0
})
gsap.from(".icon",{
    x:100,
    duration:1,
    delay:1.5,
    stagger:0.5,
    opacity:0
})

gsap.from(".service",{
    x:-1000,
    duration:1,
    delay:0.2,
    stagger:0.5,
    scale:"0",
    scrollTrigger:{
        trigger:".services",
        scroller:"body",
        // markers:true, 
        start:"top 60%",
        end: "top : 20%"
    }
})

gsap.from(".inner,.ninty",
{
    x:-500,
    duration:2,
    delay:0.2,
    scrollTrigger:{
        trigger:".inner,.ninty",
        scroller:"body",
        // markers:true, 
        start:"top 60%",
        end: "top : 20%"
    }
})

