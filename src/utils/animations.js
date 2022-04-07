import BezierEasing from 'bezier-easing'

export const DURATION = 3000

export const DURATION_FAST = 100

export const DURATION_LONG = 1000

export const easing = BezierEasing(0.25, 0.1, 0.25, 1)

export const animateBase = ({ duration, timing, draw, callback = () => {} }) => {

    const start = performance.now()

    requestAnimationFrame(function animate (time) {
        // timeFraction от 0 до 1
        let timeFraction = (time - start) / duration

        if (timeFraction > 1) {
            timeFraction = 1
        }

        // текущее состояние анимации
        const progress = timing(timeFraction)

        draw(progress)

        if (timeFraction < 1) {
            requestAnimationFrame(animate)
        }
        if (timeFraction === 1) {
            callback()
        }
    })
}

export const animate = (func, callback, duration = DURATION) => {
    animateBase({
        duration,
        timing: easing,
        draw: func,
        callback
    })
}

