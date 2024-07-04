const back = document.querySelector('#back');
const blogitem = document.querySelector('#blog-item')

let stored = [];

function renderBlog(){
    
    blogitem.innerHTML='';
    
    console.log(stored);

    for (let i = 0; i < stored.legnth; i++){
      
      console.log(stored);

      const ah = document.createElement('a');
      ah.classList.add('header');
      ah.textContent = stored[i].title;

      console.log(ah)

      const li = document.createElement('li');
      li.textContent = stored[i].cont;

      console.log(li);

      const af = document.createElement('a');
      af.classList.add('footer');
      af.textContent = stored[i].name;

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