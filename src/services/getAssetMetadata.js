import { apiconfig } from '../config/apiconfig';

export default function getAssetMetadata({ nasaId }) {

    const urlToFetch = `${ apiconfig.BASE_IMAGES_URL }metadata/${ nasaId }`;
    
    return fetch(urlToFetch)
            .then(response => response.json())
            .then(response => {

                return fetch(response.location)

            })
            .then(response => response.json())
            .then((data) => {
                return {
                    title: data['AVAIL:Title'],
                    description: data['AVAIL:Description'],
                    creationDate: data['AVAIL:DateCreated'],
                    centerPlace: data['AVAIL:Center'],
                    keywords: data['AVAIL:Keywords']
                }
            });

}