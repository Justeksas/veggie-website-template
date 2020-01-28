"use strict";

let elements = document.getElementsByClassName("navActive");
for(let i = 0; i < elements.length; i++){
    elements[i].onclick = function(){
        let el = elements[0];
        while(el){
            if(el.tagName === "LI"){
                el.classList.remove("activeItem");
            }
            el = el.nextSibling;
        }
    this.classList.add("activeItem");  
    };
};

let elementsFood = document.getElementsByClassName("foodPage");
for(let j = 0; j < elementsFood.length; j++){
    elementsFood[j].onclick = function(){
        // remove class from sibling
        let elf = elementsFood[0];
        while(elf){
            if(elf.tagName === "LI"){
                //remove class
                elf.classList.remove("activePage");
            }
            // pass to the new sibling
            elf = elf.nextSibling;
        }
        this.classList.add("activePage");;
        changeMenu(this);
    };
};
		
function changeMenu(elem){
    let x=document.getElementsByClassName("page");
    let name=String(elem.id);
    name=name.replace("-select","");
    let l=document.getElementsByClassName("activeMenu");
    l[0].classList.remove("activeMenu");
    x[parseInt(name)].classList.add("activeMenu");

};

window.addEventListener('scroll', function () {
    var nav = document.getElementById('myMainNav');
    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
            nav.classList.add('nav-colored');
            nav.classList.remove('nav-transparent');
        } else {
            nav.classList.add('nav-transparent');
            nav.classList.remove('nav-colored');
        }
});


