
const navbar = document.querySelector('.nav-bar .navbar');
const change_nav_scroll = document.querySelectorAll('.change-navbar-point');

const scroll_top = document.querySelector('.scrool-top');
const load = document.querySelector('.loding');

window.addEventListener('load',function(){
    setTimeout(function(){
        load.classList.add('opacity-0','invisible');
        document.body.style.overflow="auto";
    },2000);
});

window.addEventListener('scroll',function(){
    for(let i=0;i<change_nav_scroll.length;i++){
        if(window.scrollY >= change_nav_scroll[i].offsetTop){
            navbar.style.backgroundColor = "#fff";
            scroll_top.classList.remove('opacity-0','invisible');
        }
        else{
            navbar.style.backgroundColor = "#eee";
            scroll_top.classList.add('opacity-0','invisible');
        }
    }
})

scroll_top.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})
