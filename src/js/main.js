import particles from './particles.js'
import './doc.js'
import './downloads.js'
import './mobileNav.js'

require('../css/style.styl');

const particlesJs = document.getElementById('particles-js');
const headeSection = document.getElementsByClassName('header-section');
const headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
let currentScrollTop = document.body.scrollTop;
let previusScrollTop = currentScrollTop;

if (particlesJs) {
    particles.particlesJS.load('particles-js', './particlesjs-config.json', () => {
        console.log('callback - particles-js config loaded');
    });
}


if (headeSection.length) {
    window.addEventListener("scroll", () => {
        currentScrollTop = document.body.scrollTop;

        if (!currentScrollTop) {
            document.body.className = "";
        } else if ( (currentScrollTop - previusScrollTop) > 0 && currentScrollTop > headerHeight ) {
            document.body.className = "hide-header";
        } else if ((currentScrollTop - previusScrollTop) < 0) {
            document.body.className = "show-header";
        }

        previusScrollTop = currentScrollTop;
    });
}