import { renderClothing } from "./render_clothing.js";

const orderData = (clothing) => {
    let min, aux;
    for(let i=0;i<clothing.length-1;i++){
        min = i;
        for(let j=i+1;j<clothing.length;j++){
            if((clothing[j].price)<(clothing[min].price)) min=j;
        }
        if(min!=i){
            aux = clothing[i];
            clothing[i] = clothing[min];
            clothing[min] = aux;
        }
    }
    return clothing;
}

export const filterOrder = (clothing,order) => {
    clothing = orderData(clothing);
    renderClothing(order=="max" ? clothing.reverse() : clothing);
}