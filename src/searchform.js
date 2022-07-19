

import get from './getElement.js';
import presentDrinks from './presentDrink.js';

const baseURL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

const form = get ('.textsearch');
const input = get ('[name="drink"]');

form.addEventListener('keyup', function(e) {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    presentDrinks(`${baseURL}${value}`);
});