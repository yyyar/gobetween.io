require('../css/style.styl');
const doc = require('../md/doc.md');

if (window.particlesJS) {
    particlesJS.load('particles-js', './particlesjs-config.json', function() {
        console.log('callback - particles-js config loaded');
    });
}


// Documentation page
document.getElementsByClassName('documentation-content')[0].innerHTML = doc;
