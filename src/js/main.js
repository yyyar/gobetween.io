require('../css/style.styl');
require('./doc.js');
require('./mobileNav.js');

if (window.particlesJS) {
    particlesJS.load('particles-js', './particlesjs-config.json', function() {
        console.log('callback - particles-js config loaded');
    });
}
