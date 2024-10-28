
// Initialize GSAP Box Reveal Animation
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const contentContainer = document.querySelector('.content-container');
    
    // Preloader fade-out and box reveal animation
    setTimeout(() => {
        preloader.classList.add('hidden'); // Hide preloader

        // GSAP box reveal animation
        gsap.timeline()
            .to(contentContainer, {
                clipPath: 'inset(0% 0% 0% 0%)',
                opacity: 1,
                duration: 0.01,
                ease: 'power2.out'
            });
    }, 1000); // Adjust time as necessary
});
console.clear();

const svg = document.querySelector("#svg");
const img = document.querySelector("#img");
const circle = document.querySelector("#circle");
const pad = 4;

let radius = +circle.getAttribute("r");
let imgWidth, imgHeight;

gsap.set(img, {
    scale: 2,
    xPercent: -50,
    yPercent: -50
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.image-unmask',
        pin: true,
        start: "top top",
        end: '+=2500',
        //end: "bottom bottom",
        scrub: 0.2,
    },
    defaults: {
        duration: 1
    }
})
    .to(circle, {
        attr: {
            r: () => radius
        }
    }, 0)
    .to(img, {
        scale: 1,
        opacity: 1,
    }, 0)
    .to("#whiteLayer", {
        alpha: 0,
        ease: "power1.in",
        duration: 1 - 0.25
    }, 0.25)
    ;



window.addEventListener("load", init);
window.addEventListener("resize", resize);

function init() {

    imgWidth = img.naturalWidth;
    imgHeight = img.naturalHeight;

    resize();
}

function resize() {

    tl.progress(0);

    const r = svg.getBoundingClientRect();
    const rectWidth = r.width + pad;
    const rectHeight = r.height + pad;

    const rx = rectWidth / imgWidth;
    const ry = rectHeight / imgHeight;

    const ratio = Math.max(rx, ry);

    const width = imgWidth * ratio;
    const height = imgHeight * ratio;

    const dx = rectWidth / 2;
    const dy = rectHeight / 2;
    radius = Math.sqrt(dx * dx + dy * dy);

    gsap.set(img, { width, height });

    tl.invalidate();

    ScrollTrigger.refresh();

}

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video");

    // Ensure video metadata is loaded
    video.addEventListener("loadedmetadata", () => {
        gsap.registerPlugin(ScrollTrigger);

        // Use GSAP to control video time based on scroll
        gsap.to(video, {
            scrollTrigger: {
                trigger: ".intro-section",
                start: "top center",   // start animation when top of section reaches center of viewport
                end: "bottom center",   // end animation when bottom of section reaches center
                scrub: true,            // smooth scrubbing
                onEnter: () => video.play(),     // Play when entering
                onLeave: () => video.pause(),    // Pause when leaving
                onEnterBack: () => video.play(), // Play when scrolling back into view
                onLeaveBack: () => video.pause() // Pause when scrolling out of view
            },
            currentTime: video.duration, // Animate from start to end of video
            ease: "none"
        });
    });
});


requestAnimationFrame(raf);

