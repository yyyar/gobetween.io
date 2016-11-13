import Ajax from 'simple-ajax';
import { markdown } from 'markdown';


const page = location.pathname.match(/downloads/);

if (page) {
    const releases = new Ajax({
        url: 'https://api.github.com/repos/yyyar/gobetween/releases',
        method: 'GET',
        dataType: 'json'
    });

    releases.on('success', (event, response) => {
        const linksWrap = document.getElementsByClassName('release-links')[0];
        const currentVer = document.getElementsByClassName('current-version')[0];
        const lastVersion = response[0];

        for (let i = 1; i < response.length; i++) {
            const obj = response[i];
            const a = document.createElement('a');
            const br = document.createElement('br');
            a.href = obj.html_url;
            a.innerHTML = `[${obj.name}]`;
            a.target = '_blank';
            linksWrap.appendChild(a);
            linksWrap.appendChild(br);
        }

        for (let j = 0; j < lastVersion.assets.length; j++) {
            let os = lastVersion.assets[j];

            os.name.match(/darwin_386/g) && document.getElementsByClassName('darwin-86')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/darwin_amd64/g) && document.getElementsByClassName('darwin-64')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/linux_386/g) && document.getElementsByClassName('linux-86')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/linux_amd64/g) && document.getElementsByClassName('linux-64')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/windows_386/g) && document.getElementsByClassName('windows-86')[0].setAttribute('href', os.browser_download_url);
            os.name.match(/windows_amd64/g) && document.getElementsByClassName('windows-64')[0].setAttribute('href', os.browser_download_url);
        }

        currentVer.innerHTML = `v${lastVersion.name}`;

        document.getElementsByClassName('release-content')[0].innerHTML = markdown.toHTML(lastVersion.body);
    });

    releases.on('error', (event, response) => {
        console.log('error', event);
    });

    releases.send();
}