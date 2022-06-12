import { appconfig } from '@/config/appconfig';
import { toFetch } from './helpers/toFetch';
import { GetAssetMetadataDetailResponseType } from './types/GetAssetMetadataDetailResponseType';
import { GetAssetMetadataResponseType } from './types/GetAssetMetadataResponseType';

export const getAssetMetadata = async (nasaId: string) => {

    const urlToFetch = `${ appconfig.BASE_IMAGES_URL }/metadata/${ nasaId }`

    const response = await toFetch<GetAssetMetadataResponseType>(urlToFetch)

    if (response) {

        return toFetch<GetAssetMetadataDetailResponseType>(response.location)

    }

    return response

}