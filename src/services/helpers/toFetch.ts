export async function toFetch<T>(
    url: string,
    config: RequestInit = {}
): Promise<T | null> {

    try {

        const _response = await fetch(url, config)
        return await _response.json() as T

    } catch(error) {

        console.error("[!] Unexpected error when try to dispatch the HTTP request:")
        console.log(error)

        return null

    }

}