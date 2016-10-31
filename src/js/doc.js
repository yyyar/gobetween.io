import Sidebar from '../gobetween.wiki/_Sidebar.md';

const documentationSideBar = document.getElementsByClassName('documentation-side-bar')[0];
const loadDoc = (fileName) => {
    if (!fileName) fileName = 'Introduction';
    document.getElementsByClassName('documentation-content')[0].innerHTML = require(`../gobetween.wiki/${fileName}.md`);
};

documentationSideBar.addEventListener('click', function (e) {
    loadDoc(e.target.hash.substr(1));
});

loadDoc(location.hash.substr(1));

documentationSideBar.innerHTML = Sidebar;
