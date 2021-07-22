function throttle (fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            return;
        }
        fn.call(this, ...args);
        timer = setTimeout(() => {
            timer = null;
        }, delay);
    };
}
