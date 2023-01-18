import { renderClothing } from "./render_clothing.js"

export const filterType = (clothing,filter) => {
    clothing = clothing.filter(el=>el.type.includes(filter));
    return clothing;
}