export const filterFree = (clothing) => {
    clothing = clothing.filter(el=>el.free==true);
    return clothing;
}