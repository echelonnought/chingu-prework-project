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


const backToTopButton = document.querySelector("#btn-return-top");

window.addEventListener("scroll", scrollFunction)
function scrollFunction() {
    if (window.pageYOffset > 600) {
        if (!backToTopButton.classList.contains("btnEntrance")) 
        {
        backToTopButton.classList.remove("btnExit");    
        backToTopButton.classList.add("btnEntrance");
        backToTopButton.style.display = "block";
        }
     }
    else {
        if (backToTopButton.classList.contains("btnEntrance"))
            
        { backToTopButton.classList.remove("btnEntrance");
          backToTopButton.classList.add("btnExit");    
          setTimeout( function() {
              backToTopButton.style.display = "none"; 
          }, 250);
        } 
    }
}

window.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}



