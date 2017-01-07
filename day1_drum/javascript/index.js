
const nav = document.querySelector('#main_nav')
const topOfNav = nav.offsetTop;
function fixNav(){
    console.log(topOfNav);
}
window.addEventListener('scroll', fixNav);
