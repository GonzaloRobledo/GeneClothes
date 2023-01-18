export const bdTrolley = {
    trolley:[]
};

export const updateTrolley = () => {
    const trolley = JSON.parse(localStorage.getItem("trolley"));
    if(trolley!=null) bdTrolley.trolley = trolley.trolley;
}
