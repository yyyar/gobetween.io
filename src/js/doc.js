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

    documentationSideBar.addEventListener('click', function (e) {
        loadDoc(e.target.hash.substr(1));
    });

    loadDoc(location.hash.substr(1));

    documentationSideBar.innerHTML = Sidebar;

}