
import { showLoading } from "./toggle-loading.js";

const fetchDrinks = async(url) =>{
    showLoading();
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default fetchDrinks;