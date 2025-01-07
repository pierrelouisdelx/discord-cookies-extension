window.addEventListener('load', function () {
    // Preserve localStorage as separate var to keep it before any overrides
    let __ls = localStorage;
    // Restrict closure overrides to break global context reference to localStorage
    Object.defineProperty(window, 'localStorage', {
        writable: false,
        configurable: false,
        value: __ls,
    });
});
