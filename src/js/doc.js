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
            console.log(document.getElementsByClassName('documentation-content-title')[0].offsetTop);
        }

        document.getElementsByClassName('documentation-content')[0].innerHTML = file;
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
        const activeLink = document.querySelectorAll('.documentation-side-bar a.active')[0];
        const title = document.getElementsByClassName('documentation-content-title')[0];
        let y = 0;

        window.screen.width > 768 ? y = title.offsetTop : y = findPosY(title);


        activeLink && activeLink.classList.remove('active');

        e.target.setAttribute('class', 'active');

        scrollTo(y, 200);

        loadDoc(e.target.hash.substr(1));
    });

    documentationSideBar.innerHTML = Sidebar;

    loadDoc(location.hash.substr(1));

}