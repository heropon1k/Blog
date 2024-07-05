const back = document.querySelector('#back');
const blogitem = document.querySelector('#blog-item');
const cardbox = document.querySelector("#card-box");
const title = document.querySelector("#head")

//variable is going to store the data from localstorage
let stored = [];

function renderBlog(){
    
    //display length of stored
    //console.log(stored.length);

    //start rendering blog
    for (let i = 0; i < stored.length; i++){
      //Creating another variable to temporarily store array element i
      const temp = stored[i];
      console.log(temp);

      //Creating ul with a class of card and an id of blog item
      //This is to follow DOM structure
      const ul = document.createElement('ul');
      ul.classList.add('card');
      ul.setAttribute('id','blog-item');

      //Creating a with class of header and textcontent of title
      const ah = document.createElement('a');
      ah.classList.add('header');
      ah.textContent = temp.title;

      //Creating li with class of list and textcontent of cont
      const li = document.createElement('li');
      li.classList.add('list')
      li.textContent = temp.cont;

      //Creating a with class of footer and textcontent of posted by name
      const af = document.createElement('a');
      af.classList.add('footer');
      af.textContent = "posted by: "+temp.name;
      
      //append created ul element to div from html
      cardbox.append(ul);
      //append each child element to created ul
      ul.appendChild(ah);
      ul.appendChild(li);
      ul.appendChild(af);
      
    }

}

//back button 
back.addEventListener('click', function(event){
    event.preventDefault();
    //link to index.html
    window.location.href="index.html"
})

//initialize the page
function init(){
  //create a variable to get localstorage
  const storedblog = JSON.parse(localStorage.getItem('blog'));

  //Store localstorage into variable stored if storedblog is not empty
  if(storedblog !== null){
    stored = storedblog;
  }
  
  console.log(stored);

  renderBlog();

}

init();