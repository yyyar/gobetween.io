import Ajax from 'simple-ajax';


const page = location.pathname.match(/community/);

if (page) {
    const people = new Ajax({
        url: 'https://api.github.com/repos/yyyar/gobetween/contents/AUTHORS',
        method: 'GET',
        dataType: 'json',
    });

    people.on('success', (event, response) => {

        let people = atob(response.content).split('\n');
        people = people.filter(function(item) {
             if (item.includes('Yaroslav Pogrebnyak') ||
                 item.includes('Illarion Kovalchuk') ||
                 item.includes('Ievgen Ponomarenko') ||
                 item.includes('Nick Doikov')) {
                     return false;
             }
            return true;
        }).join('\n');

        people = people.split(/<.*>/).join('\n');

        document.getElementById('community-contributors').innerHTML = people;
    });

    people.on('error', (event, response) => {
        console.log('error', event);
    });

    people.send();
}
