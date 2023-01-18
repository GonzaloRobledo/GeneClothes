let infoReco = "";
let infoPopular = "";
let infoFree = "";
let infoInterest = "";

const copyInfo = (el,info) => {
    info+=`
            <li data-id=${el.id}>
                <div>
                    <img src=${el.img} alt=${el.description}>
                    ${el.free ? `<p class="free">Send Free</p>` : ""}
                </div>
                <p class="price">$${el.price}</p>
                <p>${el.description}</p>
            </li>`
    return info;
}

const pasteInfoInDom = (ul,info,nameSec) => {
    if(info!=""){
        ul.innerHTML = info;
        const $h2 = document.createElement("h2");
        $h2.textContent = nameSec;
        ul.insertAdjacentElement("beforebegin",$h2);
    } 
}

export const loadClothing = (clothing,$popular,$reco,$free,$interest) => {
    clothing.forEach(el=>{
        if(el.popular) infoPopular = copyInfo(el,infoPopular)
        if(el.reco) infoReco = copyInfo(el,infoReco)
        if(el.free) infoFree = copyInfo(el,infoFree);
        if(el.interest) infoInterest = copyInfo(el,infoInterest)
    })
    pasteInfoInDom($free,infoFree,"Free Shipping");
    pasteInfoInDom($reco,infoReco,"Recommended");
    pasteInfoInDom($popular,infoPopular,"Popular");
    pasteInfoInDom($interest,infoInterest,"Interest-free payments");
}