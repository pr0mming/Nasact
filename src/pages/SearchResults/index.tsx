import React, { useEffect, useState } from "react"
import { RouteComponentProps } from "wouter"
import DefaultTheme from "@/components/themes/DefaultTheme"
import ListOfImageVideoLibrary from "@/components/ListOfImageVideoLibrary"
import { PictureType } from "@/context/types/SearchEngineType"
import { getImageVideoLibrary } from "@/services/getImageVideoLibrary"

export default function SearchResults(params: RouteComponentProps) {

	const { keyword, page } = params.params

	const [ pictures, setPictures ] = useState<PictureType[]>([])
	const [ loading, setLoading ] = useState(false)

	useEffect(() => {

        setLoading(true)

		if (keyword) {

			getImageVideoLibrary(keyword, page)
				.then((data) => {

                    if (data) {

                        const _pictures = data
                            .filter((links) => (links.links ?? []).length)
                            .map((pic) => {
                                new Image().src = (pic.links ?? [])[0].href

                                return {
                                    nasaId: pic.data[0].nasa_id,
                                    url: (pic.links ?? [])[0].href
                                }
                            })

                        setPictures(_pictures)

                    }
	
				})
                .finally(() => {
                    setLoading(false)
                })

		}

	}, [keyword, page])

	if (keyword) {

		return (
			<DefaultTheme>				
				<div className="home-list-results-container">
                    <ListOfImageVideoLibrary props={{ 
                        pictures, 
                        loading: loading
                    }} />
                </div>
			</DefaultTheme>
		)

	}

	return null

}
