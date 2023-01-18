export const timeHeaderImage = () => {
    const $imgHeader = document.querySelectorAll("#img-site .img-site");
    const $imgSelect = document.querySelectorAll(".img-select i");
    const quantityImg = $imgHeader.length-1;
    let i=0;

    setInterval(()=>{
        $imgHeader.forEach(el=>el.classList.toggle("translate-100"));
        $imgSelect[i].classList.remove("selected");
        i==quantityImg ? i=0 : i++;
        $imgSelect[i].classList.add("selected");
    },3000)
}