// Force the sroll on reload
window.addEventListener('load', (event) => {
   window.scrollTo(0, 0);
});

// Get all the sidebar Li
var liList = Array.prototype.slice.call(document.getElementsByClassName('sidebar-li'));

// Add a onclick function to change the color of the <Li> we clicked on and reset the other
liList.forEach(element => element.addEventListener('click', function handleClick() {
    liList.forEach(element => element.classList.remove("active"));
    element.classList.add("active");
}));