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
    blog = prev;

    console.log(blog)

    const blogelement = {
        name: nameInput.value.trim(),
        title: titlecont.value.trim(),
        cont: content.value.trim()

    }
    

    console.log("submit")
    blog.push(blogelement);
    console.log(blog)
    localStorage.setItem('blog', JSON.stringify(blog));
    window.location.href='blog.html';


})


mode.addEventListener('click', function (event) {
    event.preventDefault();

});