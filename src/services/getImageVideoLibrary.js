import { apiconfig } from '../config/apiconfig';

export default function getImageVideoLibrary({search, page}) {

    const urlToFetch = `${ apiconfig.BASE_IMAGES_URL }search?q=${ search }&page=${ page }&media_type=image&year_start=1920&year_end=2022`;
    
    return fetch(urlToFetch)
            .then(response => response.json())
            .then(response => {

                return response.collection.items;

            });

}