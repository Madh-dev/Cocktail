


import presentDrinks from './src/presentDrink.js';
import './src/searchform.js'
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=d";

window.addEventListener("DOMContentLoaded", ()=>{
    presentDrinks(URL)
});
