import { appconfig } from '@/config/appconfig';
import { toFetch } from './helpers/toFetch';
import { GetImageVideoLibraryResponseType } from './types/GetImageVideoLibraryResponseType';

export const getImageVideoPopular = async () => {

    const urlToFetch = `${ appconfig.BASE_IMAGES_ASSETS_URL }/popular.json`;
    
    const response = await toFetch<GetImageVideoLibraryResponseType>(urlToFetch)

    return response?.collection.items

}