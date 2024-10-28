// Variables for scroll-based video animation
let lastScrollTime = 0;
let targetTime = 0;
let isScrolling = false;
let scrollSpeed = 0.5;
let minSpeed = 0.001;
let decelerationRate = 0.98;

function scrollVideo() {
    var video = document.getElementById('video');
    var videoLength = video.duration;
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    targetTime = (scrollPosition / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * videoLength;
    scrollSpeed = 0.01;
    isScrolling = true;
}

function smoothVideoPlayback() {
    var video = document.getElementById('video');

    if (isScrolling) {
        video.currentTime += (targetTime - video.currentTime) * scrollSpeed;
        scrollSpeed *= decelerationRate;

        if (scrollSpeed < minSpeed) {
            scrollSpeed = minSpeed;
        }

        if (Math.abs(video.currentTime - targetTime) < 0.01) {
            video.currentTime = targetTime;
            isScrolling = false;
        }
    }
    requestAnimationFrame(smoothVideoPlayback);
}

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
                duration: 1.2,
                ease: 'power2.out'
            });
    }, 1000); // Adjust time as necessary
});

// Scroll-triggered video animation setup
const lenis = new Lenis({
    smooth: true,
    duration: 2,
    easing: (t) => Math.pow(t, 3),
    wheelMultiplier: 2.0,
    touchMultiplier: 2.0,
    infinite: false,
});

lenis.on('scroll', (e) => {
    scrollVideo();
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
smoothVideoPlayback();
