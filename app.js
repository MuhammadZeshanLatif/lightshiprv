// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Box Reveal Animation
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
        scrub: 0.2,
    },
    defaults: {
        duration: 1
    }
})
.to(circle, {
    attr: { r: () => radius }
}, 0)
.to(img, {
    scale: 1,
    opacity: 1,
}, 0)
.to("#whiteLayer", {
    alpha: 0,
    ease: "power1.in",
    duration: 0.75
}, 0.25);

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

gsap.from('.intro-img', {
    scale: 0.9,
    duration: 3,
    delay: 2,
    borderRadius: "20px",
    backgroundSize: "cover",
    scrollTrigger: {
        trigger: '.intro-img2',
        scroller: 'body',
        scrub: 0.5,
        start: "top 100%",
        end: "bottom 1%",
    }
});

gsap.from('.hero-video', {
    y: 100,
    scrub: 1,
    duration: 2,
});

gsap.from(".intro-section", {
    clipPath: "inset(140px)",
    scrollTrigger: {
        trigger: '.intro-section',
        scroller: 'body',
        scrub: 0.5,
        start: "top 50%",
        end: "bottom 100%",
    }
});

gsap.from(".intro-video", {
    clipPath: "inset(100% 0 0 0)",
    duration: 3,
    scrollTrigger: {
        trigger: '.intro-video',
        scroller: 'body',
        scrub: 1,
        start: "top 20%",
        end: "30% 20%",
        markers: true, // Optional: Shows markers for start and end in the viewport
    }
});

gsap.to(".intro-video", {
    scrollTrigger: {
        trigger: '.intro-video',
        scroller: 'body',
        scrub: true,
        start: "top top",
        end: "+=200%",
        pin: true,
        onUpdate: (self) => {
            const video = document.querySelector('.intro-video');
            const newTime = video.duration * self.progress;
            video.currentTime += (newTime - video.currentTime) * 0.1;
            video.pause();
        },
        onLeave: () => {
            const video = document.querySelector('.intro-video');
            video.pause();
            video.currentTime = video.duration;
        },
        onEnterBack: () => {
            const video = document.querySelector('.intro-video');
            video.play();
        }
    }
});

// Slider
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'slide',
        perPage: 2,
        pagination: true,
    });

    splide.on('mounted move', function () {
        var bar = document.querySelector('.my-carousel-progress-bar');
        if (bar && bar.style) {
            var end = splide.length;
            var rate = Math.min((splide.index + 2) / end, 1);
            bar.style.width = String(100 * rate) + '%';
        }
    });

    splide.mount();
});
let colapsableMenu = document.querySelector(".hamburger");
let menuColapsable = document.querySelector(".menu-colapsable");
let navbar = document.getElementById("navbar");
let isMenuOpen = false; // Track the menu state

let toggleMenu = () => {
    console.log("toggleMenu");
    if (isMenuOpen) {
        // Slide up to hide the menu
        gsap.to(menuColapsable, {
            top: '-100vh', // Move it above the viewport
            duration: 1, // Duration of the animation
            ease: "power2.out" // Easing function for smooth animation
        });
        navbar.classList.remove("black"); // Remove the class to change color back
    } else {
        // Slide down to show the menu
        gsap.to(menuColapsable, {
            top: 0, // Slide down to the top of the viewport
            duration: 1, // Duration of the animation
            ease: "power2.out" // Easing function for smooth animation
        });
        navbar.classList.add("black"); // Add the class to change color
    }
    isMenuOpen = !isMenuOpen; // Toggle the menu state
};

// Attach the function to the button click event
colapsableMenu.addEventListener('click', toggleMenu);

