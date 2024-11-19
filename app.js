
const lenis = new Lenis();


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
        // markers: true,
    }
});
const captions = document.querySelector('#caption');

gsap.to(".intro-video", {
    scrollTrigger: {
        trigger: '.intro-video',
        scroller: 'body',
        scrub: true,
        start: "top top",
        end: "+=400%",
        pin: true,
        onUpdate: (self) => {
            const video = document.querySelector('.intro-video');
            const newTime = video.duration * self.progress;
            video.currentTime += (newTime - video.currentTime) * 1;

            // Smoothly change the caption text and slide it from bottom to top
            if (self.progress < 0.15) {
                gsap.to(captions, {
                    
                    duration: 0.5,
                    y: 0, // Slide from the bottom
                    opacity: 1, // Ensure opacity is 1
                    ease: "power2.out"
                });
                //  captions.innerHTML = "Bright, open spaces.";
                document.querySelector('.cp1').style.display="block";
                document.querySelector('.cp2').style.display="none";
                document.querySelector('.cp3').style.display="none";
                document.querySelector('.cp4').style.display="none";
            } else if (self.progress < 0.25) {
                gsap.to(captions, {
                    duration: 1,
                    delay:1,
                    y: 0, // Slide from the bottom
                    opacity: 1,
                    ease: "power2.out"
                });
                document.querySelector('.cp1').style.display="none";
                document.querySelector('.cp2').style.display="none";
                document.querySelector('.cp3').style.display="none";
                document.querySelector('.cp4').style.display="none";
            } else if (self.progress < 0.35) {
                gsap.to(captions, {
                    duration: 1,
                    delay:1,
                    y: 0, // Slide from the bottom
                    opacity: 1,
                    ease: "power2.out"
                });
                document.querySelector('.cp1').style.display="none";
                document.querySelector('.cp2').style.display="block";
                document.querySelector('.cp3').style.display="none";
                document.querySelector('.cp4').style.display="none";
            } else if (self.progress < 0.45) {
                gsap.to(captions, {
                    duration: 1,
                    delay:1,
                    y: 0, // Slide from the bottom
                    opacity: 1,
                    ease: "power2.out"
                });
                document.querySelector('.cp1').style.display="none";
                document.querySelector('.cp2').style.display="none";
                document.querySelector('.cp3').style.display="none";
                document.querySelector('.cp4').style.display="none";
            } else if (self.progress < 0.65) {
                gsap.to(captions, {
                    duration: 1,
                    delay:1,
                    y: 0, // Slide from the bottom
                    opacity: 1,
                    ease: "power2.out"
                });
                document.querySelector('.cp1').style.display="none";
                document.querySelector('.cp2').style.display="none";
                document.querySelector('.cp3').style.display="block";
                document.querySelector('.cp4').style.display="none";
            } else if (self.progress < 0.75) {
                gsap.to(captions, {
                    duration: 1,
                    delay:1,
                    y: 0, // Slide from the bottom
                    opacity: 1,
                    ease: "power2.out"
                });
                document.querySelector('.cp1').style.display="none";
                document.querySelector('.cp2').style.display="none";
                document.querySelector('.cp3').style.display="none";
                document.querySelector('.cp4').style.display="none";
            } else if (self.progress < 0.85) {
                gsap.to(captions, {
                    duration: 0.5,
                    delay:1,
                    y: 0, // Slide from the bottom
                    opacity: 1,
                    ease: "power2.out"
                });
                document.querySelector('.cp1').style.display="none";
                document.querySelector('.cp2').style.display="none";
                document.querySelector('.cp3').style.display="none";
                document.querySelector('.cp4').style.display="block";
            }

            // Show or hide captions based on progress
            if (self.progress < 0.9) {
                captions.style.display = "block";
            } else {
                captions.style.display = "none";
            }

            video.pause();
        },
        onLeave: () => {
            const video = document.querySelector('.intro-video');
            video.pause();
            video.currentTime = video.duration;

            // Hide captions when leaving the scrollTrigger
            captions.style.display = "none";
        },
        onEnterBack: () => {
            const video = document.querySelector('.intro-video');
            video.play();

            // Reset captions when scrolling back
            captions.style.display = "none";
        },
        onLeaveBack: () => {
            // Hide captions when scrolling back
            captions.style.display = "none";
        }
    }
});
// const captions = document.querySelector('#caption');

// gsap.to(".intro-video", {
//     scrollTrigger: {
//         trigger: '.intro-video',
//         scroller: 'body',
//         scrub: true,
//         start: "top top",
//         end: "+=400%",
//         pin: true,
//         onUpdate: (self) => {
//             const video = document.querySelector('.intro-video');
//             const newTime = video.duration * self.progress;
//             video.currentTime += (newTime - video.currentTime) * 1;

//             // Smoothly change the caption text and slide it from bottom to top
//             if (self.progress < 0.15) {
//                 gsap.to(captions, {
                    
//                     duration: 0.5,
//                     y: 0, // Slide from the bottom
//                     opacity: 1, // Ensure opacity is 1
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = `Integrated solar and <br> all-electric everything.`;
//             } else if (self.progress < 0.25) {
//                 gsap.to(captions, {
//                     duration: 1,
//                     delay:1,
//                     y: 0, // Slide from the bottom
//                     opacity: 1,
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = "";
//             } else if (self.progress < 0.35) {
//                 gsap.to(captions, {
//                     duration: 1,
//                     delay:1,
//                     y: 0, // Slide from the bottom
//                     opacity: 1,
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = "Bright, open spaces.";
//             } else if (self.progress < 0.45) {
//                 gsap.to(captions, {
//                     duration: 1,
//                     delay:1,
//                     y: 0, // Slide from the bottom
//                     opacity: 1,
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = "";
//             } else if (self.progress < 0.65) {
//                 gsap.to(captions, {
//                     duration: 1,
//                     delay:1,
//                     y: 0, // Slide from the bottom
//                     opacity: 1,
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = "Endless views.";
//             } else if (self.progress < 0.75) {
//                 gsap.to(captions, {
//                     duration: 1,
//                     delay:1,
//                     y: 0, // Slide from the bottom
//                     opacity: 1,
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = "";
//             } else if (self.progress < 0.85) {
//                 gsap.to(captions, {
//                     duration: 0.5,
//                     delay:1,
//                     y: 0, // Slide from the bottom
//                     opacity: 1,
//                     ease: "power2.out"
//                 });
//                 captions.innerHTML = `Camp Mode to Road Mode <br> at the press of a button`;
//             }

//             // Show or hide captions based on progress
//             if (self.progress < 0.9) {
//                 captions.style.display = "block";
//             } else {
//                 captions.style.display = "none";
//             }

//             video.pause();
//         },
//         onLeave: () => {
//             const video = document.querySelector('.intro-video');
//             video.pause();
//             video.currentTime = video.duration;

//             // Hide captions when leaving the scrollTrigger
//             captions.style.display = "none";
//         },
//         onEnterBack: () => {
//             const video = document.querySelector('.intro-video');
//             video.play();

//             // Reset captions when scrolling back
//             captions.style.display = "none";
//         },
//         onLeaveBack: () => {
//             // Hide captions when scrolling back
//             captions.style.display = "none";
//         }
//     }
// });

// const captions = document.querySelector('#caption');
// gsap.to(".intro-video", {
//     scrollTrigger: {
//         trigger: '.intro-video',
//         scroller: 'body',
//         scrub: true,
//         start: "top top",
//         end: "+=400%",
//         pin: true,
//         onUpdate: (self) => {
//             const video = document.querySelector('.intro-video');
//             const newTime = video.duration * self.progress;
//             video.currentTime += (newTime - video.currentTime) * 1;

//             // Change caption color based on scroll progress
//             if (self.progress < 0.9) {
//                 captions.style.display = "block";
//             } else {
//                 captions.style.display = "none";
//             }
//             video.pause();
//         },
//         onLeave: () => {
//             const video = document.querySelector('.intro-video');
//             video.pause();
//             video.currentTime = video.duration;

//             // Change caption color to blue at the end
//             captions.style.display = "none";
//         },
//         onEnterBack: () => {
//             const video = document.querySelector('.intro-video');
//             video.play();

//             // Change caption color to white when scrolling back
//             captions.style.display = "none";
//         },
//         onLeaveBack: () => {
//             // Change caption color to white at the beginning
//             captions.style.display = "none";
//         }
//     }
// });

// const captions = document.querySelectorAll('.caption');

// gsap.to(".intro-video", {
//     scrollTrigger: {
//         trigger: '.intro-video',
//         scroller: 'body',
//         scrub: true,
//         start: "top top",
//         end: "+=400%",
//         pin: true,
//         onUpdate: (self) => {
//             const video = document.querySelector('.intro-video');
//             const newTime = video.duration * self.progress;
//             video.currentTime += (newTime - video.currentTime) * 1;

//             // Update captions based on scroll progress
//             const progress = self.progress;
//             captions.forEach((caption, index) => {
//                 const start = index / captions.length; // Start showing this caption
//                 const end = (index + 1) / captions.length; // End showing this caption

//                 if (progress >= start && progress < end) {
//                     caption.style.opacity = 1; // Fade in the current caption
//                 } else {
//                     caption.style.opacity = 0; // Fade out other captions
//                 }
//             });

//             video.pause();
//         },
//         onLeave: () => {
//             const video = document.querySelector('.intro-video');
//             video.pause();
//             video.currentTime = video.duration;

//             // Hide all captions at the end
//             captions.forEach(caption => (caption.style.opacity = 0));
//         },
//         onEnterBack: () => {
//             const video = document.querySelector('.intro-video');
//             video.play();
//         },
//         onLeaveBack: () => {
//             // Reset all captions at the beginning
//             captions.forEach(caption => (caption.style.opacity = 0));
//         }
//     }
// });


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
        colapsableMenu.classList.remove("hamburgerBlack"); // Remove the class to change color back
        colapsableMenu.classList.add("hamburgerWhite"); // Remove the class to change color back
        document.querySelector(".menu").innerText='Menu';

    } else {
        // Slide down to show the menu
        gsap.to(menuColapsable, {
            top: 0, // Slide down to the top of the viewport
            duration: 1, // Duration of the animation
            ease: "power2.out" // Easing function for smooth animation
        });
        navbar.classList.add("black"); // Add the class to change color
        colapsableMenu.classList.add("hamburgerBlack"); // Remove the class to change color back
        colapsableMenu.classList.remove("hamburgerWhite");
        document.querySelector(".black .menu").innerText='Close';
    }
    isMenuOpen = !isMenuOpen; // Toggle the menu state
};

// Attach the function to the button click event
colapsableMenu.addEventListener('click', toggleMenu);
function addClassOnScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('scrolled');
        console.log("scrolled");
      } else if (scrollTop < lastScrollTop && scrollTop < 100) {
        //navbar.classList.remove('scrolled');
        console.log("scrolled rem");
      }
  
      lastScrollTop = scrollTop;
    });
  }
  
  addClassOnScroll();
// GSAP ScrollTrigger setup
gsap.to(".navs", {
    scrollTrigger: {
        trigger: "body",   // Apply scroll trigger to the body
        scroller: "body",   // Apply scroll trigger to the body
        start: "top+=100px top", // Start when the scroll position is 100px
        end: "bottom bottom", // This will make the scrollTrigger last for the entire body scroll
        toggleClass: {targets: ".navs", className: "nav-change"}, // Add 'nav-change' to .navs
        scrub: false, // No smooth scrubbing needed here, just toggle based on scroll position
        onUpdate: (self) => {
            // Check the scroll position
            if (self.scroll() > 100) {
                // If scroll is greater than 100px, add the class
                document.querySelector(".navs").classList.add("nav-change");
            } else {
                // If scroll is less than or equal to 100px, remove the class
                document.querySelector(".navs").classList.remove("nav-change");
            }
        }
    }
});


gsap.registerPlugin(ScrollTrigger);

// Animate only the clip-path (SVG shape)
gsap.timeline({
    scrollTrigger: {
        trigger: ".start-video",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
    },
})
.to(".clip-path", {
    scale: 10, // Grow only the clip-path
    duration: 5,
    ease: "power1.inOut",
});
