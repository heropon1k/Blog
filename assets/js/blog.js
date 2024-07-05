const back = document.querySelector('#back');
const blogitem = document.querySelector('#blog-item');
const cardbox = document.querySelector("#card-box");
const title = document.querySelector("#head")

let stored = [];

function renderBlog(){
    
   // cardbox.innerHTML='';
    
    console.log(stored.length);

    for (let i = 0; i < stored.length; i++){
      console.log("for loop");
      const temp = stored[i];
      console.log(temp);

      const ul = document.createElement('ul');
      ul.classList.add('card');
      ul.setAttribute('id','blog-item');

      const ah = document.createElement('a');
      ah.classList.add('header');
      ah.textContent = temp.title;

      const li = document.createElement('li');
      li.classList.add('list')
      li.textContent = temp.cont;

      const af = document.createElement('a');
      af.classList.add('footer');
      af.textContent = "posted by: "+temp.name;
      
      cardbox.append(ul);
      ul.appendChild(ah);
      ul.appendChild(li);
      ul.appendChild(af);
      
    }

}

back.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href="index.html"
})

function init(){
  const storedblog = JSON.parse(localStorage.getItem('blog'));

  if(storedblog !== null){
    stored = storedblog;
  }
  
  console.log(stored);
  localStorage.setItem('stored',JSON.stringify(stored))
  renderBlog();

}

init();