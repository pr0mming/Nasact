import { appconfig } from '@/config/appconfig';
import { toFetch } from './helpers/toFetch';
import { GetAssetResponseType } from './types/GetAssetResponseType';

export const getAsset = async (nasaId: string) => {

    const urlToFetch = `${ appconfig.BASE_IMAGES_URL }/asset/${ nasaId }`

    const response = await toFetch<GetAssetResponseType>(urlToFetch)

    return response?.collection.items.map((item) => item.href)

}