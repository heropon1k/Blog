const back = document.querySelector('#back');
const blogitem = document.querySelector('#blog-item')

let stored = [];

function renderBlog(){
    
    //blogitem.innerHTML='';
    
    console.log(stored.length);

    for (let i = 0; i < stored.length; i++){
      console.log("for loop");
      const temp = stored[i];
      console.log(temp);

      
      const ah = document.createElement('a');
      ah.classList.add('header');
      ah.textContent = temp.title;

      const li = document.createElement('li');
      li.textContent = temp.cont;

      console.log(li);

      const af = document.createElement('a');
      af.classList.add('footer');
      af.textContent = temp.name;

      console.log(af);

      blogitem.appendChild(ah);
      blogitem.appendChild(li);
      blogitem.appendChild(af);
      
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