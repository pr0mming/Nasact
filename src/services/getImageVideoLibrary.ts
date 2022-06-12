import { appconfig } from "@/config/appconfig"
import { toFetch } from "./helpers/toFetch"
import { GetImageVideoLibraryResponseType } from "./types/GetImageVideoLibraryResponseType"

export const getImageVideoLibrary = async (search: string, page: string) => {

	const urlToFetch = `${ appconfig.BASE_IMAGES_URL }/search?q=${ search }&page=${ page }&media_type=image&year_start=1920&year_end=2022`

	const response = await toFetch<GetImageVideoLibraryResponseType>(urlToFetch)

	if (response) {

		return response.collection.items

	}

	return response

}