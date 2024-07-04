const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const titlecont = document.querySelector('#title');
const content = document.querySelector('#content');
const mode = document.querySelector('#sun')
const conti = document.querySelector('#continue');

console.log(nameInput);

const blog = [];

submit.addEventListener('click', function (event) {
    event.preventDefault();
    const blogelement = {
        name: nameInput.value.trim(),
        title: titlecont.value.trim(),
        cont: content.value.trim()

    }
    console.log("submit")
    blog.push(blogelement);
    console.log(blog)
    localStorage.setItem('blog', JSON.stringify(blog));



})

conti.addEventListener('click',function(event){
    event.preventDefault();
   window.location.href='blog.html';
})

mode.addEventListener('click', function (event) {
    event.preventDefault();

});