// creating the variables that will be used .
const sections = document.querySelectorAll("section");
const menu = document.getElementById("navbar__list");
let up = document.querySelector(".up")


// creating list item for each section exist.
function creatNavBarItems (){
    for(section of sections){
        listItem = document.createElement("li");
// after creating list item, adding the content of the item.
        listItem.innerHTML = `<li ${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</li>`;
        menu.appendChild(listItem); 
    }
    
}
// creat an hamburger menu icon to conatin the navbar items when browser window minimized.
listItem = document.createElement("li");
listItem.innerHTML = `<li class="navMenu" onclick="responsiveNavBar()">
    <i class="fa fa-bars"></i></li>`;
    menu.appendChild(listItem);

// a function to make the navbar responsive and resizeable .
function responsiveNavBar() {

  let i = document.getElementById("myNavBar");

    if (i.className === "navbar__menu") {
        i.className += " responsive";
    } 
    else {
      i.className = "navbar__menu";
    }
  }

// function to make the move to the section smoother when click to the navbar item. 
  function smoothMove (smooth){
    smooth.preventDefault();
document.getElementById(`${smooth.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        location.hash = `${smooth.target.dataset.nav}`;
      }, 500);
  }
  



// Highlight the section in the viewport and it's list item.
 function viewport(){
    sections.forEach(function (highlight){

        let highLightedItem = menu.querySelector(`[data-nav=${highlight.id}]`);
// putting a viewport range by getBoundingClientRect() and if the section in that range it will be highlighted. 
        if(
            highlight.getBoundingClientRect().top >= -350 && highlight.getBoundingClientRect().top <= 200)
            {
                highlight.classList.add("your-active-class");
                highLightedItem.classList.add("active-link");
        }
        else{
                highlight.classList.remove("your-active-class");
                highLightedItem.classList.remove("active-link");
        }
      }
      );
}


// creating a ScroolToTop icon to return to top fast and smooth.
//use onclick mithod to scroll to top smoothly by a click.
up.onclick = function() {
   window.scrollTo({
       top:0,
       behavior:"smooth"
   })
}

window.onscroll= function (){
// if the scroll to top botton position higher than 1000 will disappear automatically. 
   if (this.scrollY >= 1000){
       up.classList.add("show")
       
   }
   else{
       up.classList.remove("show")
   }
   
}


creatNavBarItems();
menu.addEventListener("click", smoothMove)
document.addEventListener("scroll", viewport);

