
// when page is scrolled, it will change class name

window.addEventListener("scroll", function () 
{

    let Navbar = document.querySelector("nav");

    if (Math.round(this.scollY) > Navbar.offsetHeight) 
    {
        console.log('works');
        Navbar.classList.add("chasing-navbar");
    }   else {
        
    }
});