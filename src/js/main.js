require('../css/style.styl');
require('./doc.js');

if (window.particlesJS) {
    particlesJS.load('particles-js', './particlesjs-config.json', function() {
        console.log('callback - particles-js config loaded');
    });
}
