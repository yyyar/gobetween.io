const sandwich = document.getElementById('mobile-sandwich');

sandwich.addEventListener('click', function (e) {
    const nav = e.target.parentNode.nextElementSibling;

    if (nav.className === 'show-mob-nav') {
        nav.className = '';
    } else {
        nav.className = 'show-mob-nav';
    }
});