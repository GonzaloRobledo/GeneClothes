//Functions and imports functions...
import { loadNavTypes } from "./load_navTypes.js";
import { getClothing } from "./get_clothing.js";
import { showNav } from "./show_nav.js";
import { filterType } from "./filter_type.js";
import { filterOrder } from "./filter_order.js";
import { filterPrices } from "./filter_prices.js";
import { filterFree } from "./filter_free.js";

//Variables and imports variables...
import { clothing } from "./get_clothing.js";
import { renderClothing } from "./render_clothing.js";
const $nav = document.getElementById("navTypes");
const $inputFree = document.getElementById("freeCheck");
let filter = localStorage.getItem("filter").toLowerCase();
let clothingFilter, clothingAll;


//Events and more...
document.addEventListener("DOMContentLoaded", async e=>{
    await getClothing();
    document.querySelector("head title").textContent = `Gene Clothes - ${filter}`
    clothingFilter = filterType(clothing,filter);
    renderClothing(clothingFilter);
    clothingAll=clothingFilter;
    loadNavTypes(clothing);
})

document.addEventListener("click",e=>{
    if(e.target.matches(".fa-bars")) showNav($nav);

    if(e.target.matches("#navTypes ul li")){
        localStorage.setItem("filter",e.target.textContent);
        location.href = "specific_garments.html";
    }

    if(e.target.matches("#sectionClothing ul li *")){
        const id = e.target.closest("li").dataset.id;
        const garment = clothing.filter(el=>el.id==id)[0];
        localStorage.setItem("info",JSON.stringify(garment)) 
        location.href = "garment_info.html";
    }

    if(e.target.matches("#filter-order *") || e.target.matches("#filter-order")){
        const $sectionOrder = document.getElementById("sectionOrder");
        $sectionOrder.classList.add("visible");
    }
    if(e.target.matches("#filter *") || e.target.matches("#filter")){
        const $sectionFilter = document.getElementById("sectionFilter");
        $sectionFilter.classList.add("visible");
    }
    if(e.target.matches(".fa-arrow-left")){
        e.target.parentNode.classList.remove("visible");
    }
    
    if(e.target.matches("#sectionOrder ul li")){
        filterOrder(clothingFilter,e.target.dataset.price);
        e.target.closest("section").classList.remove("visible");
    }

    if(e.target.matches("#sectionFilter ul li")){
        filterPrices(clothingFilter,e.target);
        e.target.closest("section").classList.remove("visible");
    }

    if(e.target.matches(".fa-magnifying-glass")){
        const $search = document.getElementById("search");
        if($search.value != ""){
            filter = $search.value.toLowerCase();
            clothingFilter = filterType(clothing,filter);
        }
    }
    if(e.target.matches(".fa-cart-shopping")){
        location.href = "trolley.html";
    }
})

document.addEventListener("change", e=>{
    if(e.target.matches("#freeCheck")){
        e.target.classList.toggle("on");
        if(e.target.classList.contains("on")){
            clothingFilter = filterFree(clothingFilter);
        }else{
            clothingFilter = clothingAll;
        }
        renderClothing(clothingFilter);
    }
})