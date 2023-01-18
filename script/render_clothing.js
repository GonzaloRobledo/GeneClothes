export const renderClothing = (clothing) => {
    let info = "";
    const $sectionClothingUl = document.querySelector("#sectionClothing ul");
    
    clothing.forEach(el=>{
        info+=`
        <li data-id=${el.id}>
            <div>
                <img src=${el.img} alt=${el.description}>
                ${el.free ? `<p class="free">Free</p>` : ""}
            </div>
            <p class="price">$${el.price}</p>
            <p>${el.description}</p>
        </li>`
    })
    info!="" ? $sectionClothingUl.innerHTML = info : $sectionClothingUl.innerHTML = `<p class="not-find">No se encontraron coincidencias</p>`;
}