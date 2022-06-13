import React, { useEffect } from "react"
import { Link } from "wouter"
import "./style.css"
import { ListOfImagesProps } from "./types/ListOfImagesProps"

export default function ListOfImageVideoLibrary({ props }: { props: ListOfImagesProps }) {

	if (props.loading) {

		return (
			<span>
				<img src="/loading_spinner.svg" alt="Loading" width={50}/>
			</span>
		)

	}

	if (props.pictures) {

		return (
			<div className="list-of-images-container">
				<div className="list-of-images-grid-container">
					{
						props.pictures.map((pic, i) => (
							<div className="list-of-images-grid-item" key={ i }>
								<Link href={ `/detail/${ pic.nasaId }` }>
									<a>
										<img loading="lazy" src={ pic.url } alt="Preview Pic" />
									</a>
								</Link>
							</div>                
						))
					}
				</div>
			</div>
		)

	}
  
	return null

}
