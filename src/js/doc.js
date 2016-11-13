import Sidebar from '../gobetween.wiki/_Sidebar.md';

const page = location.pathname.match(/documentation/);

if (page) {
    const documentationSideBar = document.getElementsByClassName('documentation-side-bar')[0];
    const loadDoc = (fileName) => {
        if (!fileName) fileName = 'Introduction';
        let file;

        try {
            file = require(`../gobetween.wiki/${fileName}.md`)
        } catch (err) {
            file = require(`../gobetween.wiki/Introduction.md`)
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

    documentationSideBar.addEventListener('click', e => {
        const activeLink = document.querySelectorAll('.documentation-side-bar a.active')[0];
        activeLink && activeLink.classList.remove('active');

        e.target.setAttribute('class', 'active');
        scrollTo(210, 200);

        loadDoc(e.target.hash.substr(1));
    });

    loadDoc(location.hash.substr(1));

    documentationSideBar.innerHTML = Sidebar;

}