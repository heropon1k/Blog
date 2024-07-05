const mode = document.querySelector('#sun')
const body = document.querySelector('#theme')

function init() {
    let theme = localStorage.getItem('theme');
    console.log(theme)
    if (theme == null) {
        theme = 'light';
    }

    if (theme === 'light') {
        theme = 'light';
        body.setAttribute('class', 'light');
        console.log(theme);

    }
    else {
        theme = 'dark';
        body.setAttribute('class', 'dark');
        console.log(theme);
    }
}

mode.addEventListener('click', function (event) {

    event.preventDefault();

    if (theme === 'light') {
        theme = 'dark';
        body.setAttribute('class', 'dark');

    }
    else {
        theme = 'light';
        body.setAttribute('class', 'light');
    }

    localStorage.setItem('theme', theme);

});

init();