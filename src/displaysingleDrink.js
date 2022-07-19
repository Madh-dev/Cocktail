
import { hideLoading } from "./toggle-loading.js";
import get from "./getElement.js";
const displayDrink = ((data) => {
    hideLoading();
    console.log(data);
    const drink = data.drinks[0];
    const { strDrink: name, strDrinkThumb: image, strAlcoholic: type, strGlass: glassType,strInstructions: desc, strCategory: categry } = drink;
    console.log(drink);
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];
    const img = get('.drink-img');
    const drinkName = get('.drinks-name');
    const description = get('.drink-desc');
    const strIngredients = get('.drink-ingredients');
    const category = get('.drink-category');
    const info = get('.drinkinfo');
    const gtype = get ('.drink-glass');
    img.src = image;
    document.title = name;
    category.textContent  = categry;
    info.textContent = type;
    gtype.textContent = glassType;
    drinkName.textContent = name;
    description.textContent = desc;
    strIngredients.innerHTML = list.map((item) => {
        if (!item)
            return;
        return `${item}</li>`;
    })
        .join('');

    console.log(drink, list);
});



export default displayDrink;