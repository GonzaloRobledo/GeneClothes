export let clothing;

export const getClothing = async () => {
    try{
        let res = await fetch("assets/clothing.json");
        let json = await res.json();

        if(!res) throw res;
        
        clothing = json.clothing;
    }catch(err){
        alert("ERROR getClothing");
    }
}