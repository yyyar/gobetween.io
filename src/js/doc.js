import Sidebar from '../gobetween.wiki/_Sidebar.md';

const page = location.pathname.match(/documentation/);

if (page) {
    const documentationSideBar = document.getElementsByClassName('documentation-side-bar')[0];
    const loadDoc = (fileName) => {
        if (!fileName) fileName = 'Introduction';
        const link = document.querySelectorAll(`a[href="#${fileName}"]`);
        let file;

        try {
            file = require(`../gobetween.wiki/${fileName}.md`)
        } catch (err) {
            file = require(`../gobetween.wiki/Introduction.md`)
        }

        if (link.length) {
            document.getElementsByClassName('documentation-content-title')[0].innerHTML = link[0].innerText;
        }

        document.getElementsByClassName('documentation-content')[0].innerHTML = file;


    if (hljs) {
            let codes = document.querySelectorAll('code');
            for (var i = 0; i < codes.length; ++i) {
                hljs.highlightBlock(codes[i]);
            }
        }
    };

    const scrollTo = (y, duration) => {
        if (duration <= 0) return;
        var difference = y - document.body.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(() => {
            document.body.scrollTop = document.body.scrollTop + perTick;
            if (document.body.scrollTop === y) return;
            scrollTo(y, duration - 10);
        }, 10);
    };

    const findPosY = (obj) => {
        let curtop = 0;
        if (obj.offsetParent) {
            while (1) {
                curtop+=obj.offsetTop;
                if (!obj.offsetParent) {
                    break;
                }
                obj=obj.offsetParent;
            }
        } else if (obj.y) {
            curtop+=obj.y;
        }
        return curtop;
    };

    documentationSideBar.addEventListener('click', e => {
        if (e.target.nodeName !== 'A') return;
        e.preventDefault();
        e.stopPropagation();
        location.hash = e.target.attributes['href'].value;
        const activeLink = document.querySelectorAll('.documentation-side-bar a.active')[0];
        const title = document.getElementsByClassName('documentation-content-title')[0];
        let y = 0;

        window.screen.width > 768 ? y = title.offsetTop : y = findPosY(title);


        activeLink && activeLink.classList.remove('active');

        e.target.setAttribute('class', 'active');

        scrollTo(y, 200);

        loadDoc(location.hash.substr(1));
    });

    documentationSideBar.innerHTML = Sidebar.replace(new RegExp('href="', 'g'), 'href="#');

    loadDoc(location.hash.substr(1));
}
