export const renderTrolley = (bdTrolley) =>{
    const $sectionTrolley = document.getElementById("sectionTrolley");
    const trolley = bdTrolley.trolley;
    let totalPrice = 0;

    if(trolley.length == 0){
        $sectionTrolley.innerHTML = `<p class="not-find">Sin elementos en el carrito</p>`
    }else{
        let info = "";
        trolley.forEach(el=>{
            info+=`<li>
                <div><img src=${el.img} alt=${el.description}></div>
                <p>$${el.price}</p>
                <p>${el.cantidad}</p>
                <i class="fa-sharp fa-solid fa-circle-xmark" data-delete=${el.id}></i>
            </li>`
            totalPrice += el.price*el.cantidad;
        })
        info = `<ul id="list-trolley">
                    <li>
                        <p>Image</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Delete</p></li>
                        ${info}
                </ul>
                <p class="total-price">Total Price: $${totalPrice}</p>
                <button class="btn-general buy">Comprar</button>
                `
                
        $sectionTrolley.innerHTML = info;
    }
}