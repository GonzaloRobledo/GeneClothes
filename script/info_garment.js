import { addToTrolley } from "./add_to_trolley.js";
import { renderInfo } from "./render_info.js";

import { bdTrolley, updateTrolley } from "./update_trolley.js";
import { showNav } from "./show_nav.js";
import { getClothing } from "./get_clothing.js";
import { clothing } from "./get_clothing.js";
import { loadNavTypes } from "./load_navTypes.js";

const info = JSON.parse(localStorage.getItem("info"));
const $sectionInfo = document.getElementById("info-garment");
const $nav = document.getElementById("navTypes");


document.addEventListener("DOMContentLoaded",async e=>{
    await getClothing();
    loadNavTypes(clothing);
    renderInfo(info,$sectionInfo);
    updateTrolley();
})

document.addEventListener("click", e=>{
    if(e.target.matches("#info-garment button")) addToTrolley(info);

    if(e.target.matches(".fa-cart-shopping")) location.href="trolley.html";

    if(e.target.matches(".fa-bars")){
        showNav($nav);
    }
    if(e.target.matches("#navTypes ul li")){
        localStorage.setItem("filter",e.target.textContent);
        location.href = "specific_garments.html";
    }
})