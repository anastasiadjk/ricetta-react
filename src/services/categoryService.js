import http from './httpService';
import config from '../config.json';

export function getCategories() {
    return http.get(config.apiUrl + '/categories');
}