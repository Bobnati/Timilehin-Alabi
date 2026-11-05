const body = document.body;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const animationDuration = 12000;
const frameInterval = 1000 / 30;
let animationFrame = 0;
let lastFrameTime = 0;

function colorAt(base, amplitude, phase) {
    return Math.round(base + Math.sin(phase) * amplitude);
}

function renderBackground(timestamp) {
    if (document.hidden || reducedMotion.matches) {
        animationFrame = 0;
        return;
    }

    if (timestamp - lastFrameTime >= frameInterval) {
        const phase = (timestamp / animationDuration) * Math.PI * 2;
        const top = [
            colorAt(81, 8, phase),
            colorAt(41, 5, phase),
            colorAt(48, 6, phase)
        ];
        const middle = [
            colorAt(199, 8, phase + 1),
            colorAt(95, 6, phase + 1),
            colorAt(113, 8, phase + 1)
        ];
        const bottom = [
            colorAt(87, 8, phase + 2),
            colorAt(37, 5, phase + 2),
            colorAt(46, 6, phase + 2)
        ];

        body.style.background = `linear-gradient(to bottom, rgb(${top.join(", ")}) 10%, rgb(${middle.join(", ")}) 50%, rgb(${bottom.join(", ")}) 100%)`;
        lastFrameTime = timestamp;
    }

    animationFrame = window.requestAnimationFrame(renderBackground);
}

function startBackgroundAnimation() {
    if (!document.hidden && !reducedMotion.matches && animationFrame === 0) {
        lastFrameTime = 0;
        animationFrame = window.requestAnimationFrame(renderBackground);
    }
}

function stopBackgroundAnimation() {
    if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
    }
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopBackgroundAnimation();
    else startBackgroundAnimation();
});

reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) stopBackgroundAnimation();
    else startBackgroundAnimation();
});

startBackgroundAnimation();
