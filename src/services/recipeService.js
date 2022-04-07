import http from './httpService';
import config from '../config.json';

export function getRecipes() {
    return http.get(config.apiUrl + '/recipes');
}
export function getRecipe(id) {
    return http.get(config.apiUrl + '/recipes' + '/' + id);
}
export function deleteRecipe(recipeId) {
    return http.delete(config.apiUrl + '/recipes' + '/' + recipeId);
}
export function saveRecipe(recipe) {
    if (recipe._id) {
        let copy = { ...recipe }
        delete copy._id;
        console.log('Copy without id: ', copy);
        http.put(config.apiUrl + '/recipes/' + recipe._id, copy)
    }
    else {
        http.post(config.apiUrl + '/recipes/', recipe)
        console.log("new recipe posted");
    }
}
