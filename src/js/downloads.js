import Ajax from 'simple-ajax';
import { markdown } from 'markdown';


const page = location.pathname.match(/downloads/);

if (page) {
    const releases = new Ajax({
        url: 'https://api.github.com/repos/yyyar/gobetween/releases',
        method: 'GET',
        dataType: 'json'
    });

    releases.on('success', function(event, response) {
        const linksWrap = document.getElementsByClassName('release-links')[0];
        const currentVer = document.getElementsByClassName('current-version')[0];

        for (var i = 0; i < response.length; i++) {
            var obj = response[i];
            if(!i) continue;
            const a = document.createElement('a');
            const br = document.createElement('br');
            a.href = obj.html_url;
            a.innerHTML = `[${obj.name}]`;
            a.target = '_blank';
            linksWrap.appendChild(a);
            linksWrap.appendChild(br);
        }

        currentVer.innerHTML = `v${response[0].name}`;

        document.getElementsByClassName('release-content')[0].innerHTML = markdown.toHTML(response[0].body);
    });

    releases.on('error', function(event, response) {
        console.log('error', event);
    });

    releases.send();
}