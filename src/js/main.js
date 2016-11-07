import particles from './particles.js'
import Doc from './doc.js'
import Downloads from './downloads.js'
import MobileNav from './mobileNav.js'

require('../css/style.styl');

const particlesJs = document.getElementById('particles-js');

if (particlesJs) {
    particles.particlesJS.load('particles-js', './particlesjs-config.json', function() {
        console.log('callback - particles-js config loaded');
    });
}
