var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")

// cursor block and cursor blur moves along
document.addEventListener("mousemove", function(dets){
    gsap.to(crsr,{ left: dets.x + 10, top: dets.y + 15, duration: 0.5, ease: "power1.out" });
    gsap.to(crsrBlur, { left: dets.x - 175, top: dets.y - 175, duration: 1, ease: "power1.out", delay: 0.3 });
})

var all_clickables = document.querySelectorAll("a")
// cursor changes to bigger circle border while hovering
all_clickables.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.transition = "all ease 0.5s"
        crsr.style.scale = 3
        crsr.style.border = "1px solid white"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = ""
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.transition = ""
    }) 
})



// navbar gets smaller in height and with black bg when scroll a little down
gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        start: "top - 10%",
        scrub: 1
    } 
})

// bg turns to black as we scroll down
gsap.to("#main", {
    backgroundColor: "black",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top + 10%",
        scrub: 1
    }
})

// images get visible as scrolled down
gsap.from("#about-us img", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})

// cards scale up as scrolled down
gsap.from("#cards-holder .card", {
    y: 50,
    scale: 0.85,
    duration: 1,
    stagger: 0.2,
    scrollTrigger:{
        trigger:"#cards-holder",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2
    }
})