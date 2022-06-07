import { apiconfig } from '../config/apiconfig';

export default function getAsset({ nasaId }) {

    const urlToFetch = `${ apiconfig.BASE_IMAGES_URL }asset/${ nasaId }`;
    
    return fetch(urlToFetch)
            .then(response => response.json())
            .then((data) => {
                return data.collection.items.map((item) => item.href);
            });

}