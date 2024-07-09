const submit = document.querySelector('#submit');
const nameInput = document.querySelector('#username');
const titlecont = document.querySelector('#title');
const content = document.querySelector('#content');

//Create variable blog to get previously stored blog posts
let blog = [];
let animals = [];

submit.addEventListener('click', function (event) {
    event.preventDefault();
  
    //Checking if previous data is empty
    if(blog.length !== 0){
        blog = JSON.parse(localStorage.getItem('blog'));

    }

    //getting data from input
    const blogelement = {
        name: nameInput.value.trim(),
        title: titlecont.value.trim(),
        cont: content.value.trim()

    }
    
    //checking if data is empty
    if (blogelement.name == "" ) {
        alert("Please fill out the form");
    } else if (blogelement.title == "") {
        alert("Please fill out the form");
    } else if (blogelement.cont == "" ) {
        alert("Please fill out the form");
    } else { 

        //console.log("submit");
        //push input into blog array
        
        blog.push(blogelement);
        //console.log(blog)
        //Store data into blog
        localStorage.setItem('blog', JSON.stringify(blog));
        //link to blog.html
        window.location.href='blog.html';
        

    
    
    }
    

  
});


