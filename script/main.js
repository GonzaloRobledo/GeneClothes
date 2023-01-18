//Imports and Functions
import { getClothing } from "./get_clothing.js";
import { timeHeaderImage } from "./time_header_image.js";
import { loadClothing } from "./load_clothing.js";
import { loadNavTypes } from "./load_navTypes.js";
import { showNav } from "./show_nav.js";
import { updateTrolley } from "./update_trolley.js";

//Variables
import { clothing } from "./get_clothing.js";
import { bdTrolley } from "./update_trolley.js";

const $popular = document.getElementById("popular");
const $reco = document.getElementById("reco");
const $free = document.getElementById("free");
const $interest = document.getElementById("interest");
const $nav = document.getElementById("navTypes");

//Events and more

document.addEventListener("DOMContentLoaded",async e=>{
    await getClothing();
    loadClothing(clothing,$popular,$reco,$free,$interest);
    loadNavTypes(clothing);
    timeHeaderImage();
    updateTrolley();
})

document.addEventListener("click", e=>{
    if(e.target.matches(".fa-bars")) showNav($nav);
    if(e.target.matches("#navTypes ul li")){
        localStorage.setItem("filter",e.target.textContent);
        location.href = "specific_garments.html";
    }
    if(e.target.matches(".fa-magnifying-glass")){
        const $search = document.getElementById("search");
        if($search.value != ""){
            localStorage.setItem("filter",$search.value);
            location.href = "specific_garments.html";
        }
    }
    if(e.target.matches("#sectionClothing ul li *")){
        const id = e.target.closest("li").dataset.id;
        const garment = clothing.filter(el=>el.id==id)[0];
        localStorage.setItem("info",JSON.stringify(garment)) 
        location.href = "garment_info.html";
    }

    if(e.target.matches(".fa-cart-shopping")){
        location.href = "trolley.html";
    }
})

document.addEventListener("keyup", e=>{
    if(e.keyCode == 13 && e.target.matches("#search")){
        if(e.target.value != ""){
            localStorage.setItem("filter",e.target.value);
            location.href = "specific_garments.html";
        }
    }
})