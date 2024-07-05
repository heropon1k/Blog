const mode = document.querySelector('#sun')
const body = document.querySelector('#theme')

let theme = 'light';

mode.addEventListener('click', function (event) {
    
    event.preventDefault();

    if (theme === 'light'){
        theme = 'dark';
        body.setAttribute('class','dark');
    }
    else{
        theme = 'light';
        body.setAttribute('class','light');
    }

});