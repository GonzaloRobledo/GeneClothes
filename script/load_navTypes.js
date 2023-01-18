export const loadNavTypes = (clothing) => {
    const $navUlType = document.querySelector("#navTypes ul")
    let info = "";
    const type = new Set();

    clothing.forEach(el=>{
        type.add(el.type);
    })

    type.forEach(el=>info+=`<li>${el}</li>`);
    $navUlType.innerHTML = info;
}