import { renderClothing } from "./render_clothing.js";

export const filterPrices = (clothing,target) => {
    const filter = target.dataset.filter;
    if(filter=="min"){
        clothing = clothing.filter(el=>el.price<parseInt(target.dataset.price));
    }else{
        if(filter=="max"){
            clothing = clothing.filter(el=>el.price>parseInt(target.dataset.price));
        }else{
            clothing = clothing.filter(el=> el.price>=parseInt(target.dataset.pricemin) && el.price<=parseInt(target.dataset.pricemax))
        }
    }
    renderClothing(clothing);
}