const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const titlecont = document.querySelector('#title');
const content = document.querySelector('#content');
const mode = document.querySelector('#sun')


console.log(nameInput);

let blog = [];
console.log(blog)

submit.addEventListener('click', function (event) {
    event.preventDefault();
    const prev = JSON.parse(localStorage.getItem('stored'));
    

    console.log(blog)

    if(prev !== null){
        blog = prev;
    }

    const blogelement = {
        name: nameInput.value.trim(),
        title: titlecont.value.trim(),
        cont: content.value.trim()

    }
    
    if (blogelement.name == "" ) {
        alert("Please fill out the form");
    } else if (blogelement.title == "") {
        alert("Please fill out the form");
    } else if (blogelement.cont == "" ) {
        alert("Please fill out the form");
    } else { 
        console.log("submit");
        blog.push(blogelement);
        console.log(blog)
        localStorage.setItem('blog', JSON.stringify(blog));
        window.location.href='blog.html';
    }

 


})


mode.addEventListener('click', function (event) {
    event.preventDefault();

});