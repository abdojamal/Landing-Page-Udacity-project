# Landing Page Project

## Table of content
---

[Description](#Description)
 * [Instructions](#Instructions)
 * [Dependencies](#Dependencies)
 
[Author's Name](#Author's-Name)

[Credits](#Credits)


## Description :
---
 This project is about giving functionality to the DOM using javascript, and what baiscally done is :

1. bulid a navbar list items (li) dynamically for each section exiest and make them conected.

2. Make the navbar usable and responsive across all modern  desktop, tablet, and phone browsers. 

3. Set CSS class active state when the element is in the viewport and Make The active section in the Navbar be highlighted.

4. Add a ScrollToTop Button to return to top in a smooth way. 

5. A smooth scrolling behavior is expected in the project.

---
### Instructions :
* this for-of loop creats (li) for each section by createElement() method and then append it into ul by appendChild().
```javascript
 function creatNavBarItems (){
    for(section of sections){
        listItem = document.createElement("li");
the content of the item.
        listItem.innerHTML = `<li ${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</li>`;
        menu.appendChild(listItem); 
    }
    
}
```
* this one to creat the hamburger icon to contain the list items when minimize the browser to be usable by all devices. 

* responsiveNavBar() function Toggle between adding and removing the "responsive" class to "navbar__menu" when the user clicks on the hamburger icon to show the list items when the screen less than 700px.

```javascript
listItem = document.createElement("li");
listItem.innerHTML = `<li class="navMenu" onclick="responsiveNavBar()">
    <i class="fa fa-bars"></i></li>`;
    menu.appendChild(listItem);

function responsiveNavBar() {

  let i = document.getElementById("myNavBar");

    if (i.className === "navbar__menu") {
        i.className += " responsive";
    } 
    else {
      i.className = "navbar__menu";
    }
  }
```
* function smoothMove() make the user able to go to the section by clicking on it's navbar item using addEventListener("click", ) .

* scrollIntoView() method and setTimeout() function make the move more smooth.

```javascript
 
  function smoothMove (smooth){
    smooth.preventDefault();
document.getElementById(`${smooth.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        location.hash = `${smooth.target.dataset.nav}`;
      }, 500);
  }
  menu.addEventListener("click", smoothMove)
```
* viewport function highlight both section and it's navbar item when the section in the view port using foreach() loop  function .

* using if condition and getBoundingClientRect() **if** the view port between -350 and 200 then add class = "your-active-class" to section and add class = "active-link" to the navbar section, and **if not** remove both classes.

* the viewport function run on scrolling by addEventListener("scroll", ) method .

```javascript
function viewport(){
    sections.forEach(function (highlight){

        let highLightedItem = menu.querySelector(`[data-nav=${highlight.id}]`);

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
document.addEventListener("scroll", viewport);
```
* to make it eazy to scroll to top again, i creat ScroolToTop icon by creat a span in HTML file :
```html
<span class="up">UP</span>
```
* this function gives functionality to the class="up".

* use onclick mithod in the first function to scroll to top smoothly by a click.

* in the second function if the ScrollToTop icon position higher than 1000 will disappear automatically and appear if lower by adding and moving the class="show" which is in the CSS file.  

```javascript
up.onclick = function() {
   window.scrollTo({
       top:0,
       behavior:"smooth"
   })
}

window.onscroll= function (){

   if (this.scrollY >= 1000){
       up.classList.add("show")
       
   }
   else{
       up.classList.remove("show")
   }
```
---

### Dependencies :
* Load an icon library to show a hamburger menu (bars) when minimize the screen. from :
[Ajax library](#href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")


---

## Author's Name :
#### Abdulrahman Jamal
---

## Credits :

* learn more about creating responsive navbar list from [w3schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp)

* learn more about **addEventListener()** from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

* learn more about **scrollIntoView()** from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

* learn more about **getBoundingClientRect()** from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

* learn more about creating ScrollToTop bottun from [w3schools](https://www.w3schools.com/HOWTO/howto_js_scroll_to_top.asp)




[(Back to top)](#Landing-Page-Project)