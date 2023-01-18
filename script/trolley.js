import { renderTrolley } from "./render_trolley.js";
import { bdTrolley, updateTrolley } from "./update_trolley.js";
import { showNav } from "./show_nav.js";
import { getClothing } from "./get_clothing.js";
import { clothing } from "./get_clothing.js";
import { loadNavTypes } from "./load_navTypes.js";

const $nav = document.getElementById("navTypes");

document.addEventListener("DOMContentLoaded",async e=>{
    await getClothing();
    loadNavTypes(clothing);
    updateTrolley();
    renderTrolley(bdTrolley);
})

document.addEventListener("click", e=>{
    if(e.target.matches(".fa-bars")) showNav($nav);
    
    if(e.target.matches("#navTypes ul li")){
        localStorage.setItem("filter",e.target.textContent);
        location.href = "specific_garments.html";
    }

    if(e.target.matches(".fa-circle-xmark")){
        bdTrolley.trolley.forEach((el,index)=>{
            if(el.id==e.target.dataset.delete) bdTrolley.trolley.splice(index,1);
        })
        localStorage.setItem("trolley",JSON.stringify(bdTrolley));
        
        renderTrolley(bdTrolley);
    }

    if(e.target.matches(".buy")){
        alert("COMPRA REALIZADA");
    }
})