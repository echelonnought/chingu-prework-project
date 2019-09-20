//const navbarMenu = document.querySelectorAll(".navbar ul");
// getting the navbar links

const navbarLinks = document.querySelectorAll(".navbar a");

// setting a click event for  each navbar link

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

// declaring the navbarLinkClick function which calls or invokes the scrollEvent 
//function by passing the 
//event parameter 

function navbarLinkClick() {
    scrollEvent(event);
}

//

function scrollEvent(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
     document.querySelector(targetId).scrollIntoView({
         behavior: "smooth",
         block: "start"
     })
    
}






