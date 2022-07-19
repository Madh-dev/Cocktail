


import fetchDrinks from "./fetchDrink.js";
import displayDrinks from "./display.js";
import setDrink from "./setDrink.js";
const showDrinks = async (url) =>{
     //fetch drinks
    const data = await fetchDrinks(url);
    console.log(data);
   
    //display drinks
    const section = await displayDrinks(data);
    console.log(section);
    if(section){
        setDrink(section)
    }
}


export default showDrinks;