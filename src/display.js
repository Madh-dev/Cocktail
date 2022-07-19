



import get  from "./getElement.js";
import { hideLoading } from "./toggle-loading.js";
const displayDrinks = ({drinks}) => {
    const section = get('.section-center');
    const title = get('.title');
    if(!drinks){
        //hide loading
        hideLoading(); 
        title.textContent = 'sorry, no drinks matched your search';
        section.innerHTML = null;
        return;
    }


    const newDrinks = drinks.map(function (drink) {

        const { idDrink: id, strDrink: name, strDrinkThumb: image, strAlcoholic: type, strGlass: glassType } = drink;

        return `
        <div class="wrapper"   >
        <div class="img"  data-id="${id}">
            <img src="${image}" alt="${name}" />
        </div>
        <div class="word" data-id="${id}" >
            <h6>${name}</h6>
            <p>${glassType}</p>
            <span>${type}</span>
            <a href="drink.html"  class="details" target = _blank> Details</a>
        </div>
    </div>
        `
    })
    .join('');

    
    //hide loading
    hideLoading();
    title.textContent = '';
    section.innerHTML = newDrinks;
    return section;

};


export default displayDrinks;


/*
`<div class="wrapper" data-id="${id}">
        <div class="img">
            <img src="${image}" alt="{name}" />
        </div>
        <div class="word">
            <h6>${name}</h6>
            <p>${glassType}</p>
            <span>${type}</span>
            <a href="drink.html"> Details</a>
        </div>`  */