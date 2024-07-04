const back = document.querySelector('#back');
const blogitem = document.querySelector('#blog-item')

function renderBlog(){
    blogitem.innerHTML='';
    const storedblog = JSON.parse(localStorage.getItem('blog'))
    console.log(storedblog);
}

back.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href="index.html"
})

renderBlog();