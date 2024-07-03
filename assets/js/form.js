const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const titlecont = document.querySelector('#title');
const content = document.querySelector('#content');
const mode = document.querySelector('#sun')

console.log(nameInput);

const blog = [];

submit.addEventListener('click', function(event){

    const blogelement = {
        name: nameInput.value.trim(), 
        title: titlecont.value.trim(),
        cont: content.value.trim()
    
    }
        console.log("submit")
        blog.push(blogelement);
        //console.log(blogelement)
        localStorage.setItem('blog', JSON.stringify(blog));
    
})

mode.addEventListener('click', function(event){
event.preventDefault();

});