import { bdTrolley } from "./update_trolley.js";

const validate = (id) => {
    const trolley = bdTrolley.trolley;
    let exists = -1;

    if(trolley.length!=0){
        trolley.forEach((el,index)=>{
            if(el.id==id) exists=index;
        })
    }
    return exists;
}

export const addToTrolley = (info) => {
    const exists = validate(info.id)
    if(exists==-1){
        const garment = {
            id: info.id,
            img: info.img,
            description: info.description,
            price: info.price,
            cantidad: 1
        }
        bdTrolley.trolley.push(garment);
    }else{
        bdTrolley.trolley[exists].cantidad += 1;
    }
    localStorage.setItem("trolley",JSON.stringify(bdTrolley));
}