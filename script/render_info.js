export const renderInfo = (info,section) => {
    section.innerHTML = `
        <h2>${info.description}</h2>
        <div>
            <img src=${info.img} alt=${info.description}>
        </div>
        <h3>$${info.price}</h3>
        <button class="btn-general">Add to Trolley</button>
    `
}