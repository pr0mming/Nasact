import { apiconfig } from '../config/apiconfig';

export default function getImageVideoPopular() {

    const urlToFetch = `${ apiconfig.BASE_IMAGES_ASSETS_URL }popular.json`;
    
    return fetch(urlToFetch)
            .then(response => response.json())
            .then(response => {

                return response.collection.items;

            });

}