import React, { useEffect, useState } from "react"
import { getAsset } from "@/services/getAsset"
import { getAssetMetadata } from "@/services/getAssetMetadata"
import "./index.css"
import { AssetDetailViewType } from "./types/AssetDetailViewType"
import { RouteComponentProps } from "wouter"
import DefaultTheme from "@/components/themes/DefaultTheme"

export default function AssetDetail(params: RouteComponentProps) {

	const { nasaId } = params.params

	const [ detailData, setDetailData ] = useState<AssetDetailViewType>()

	useEffect(() => {

		if (nasaId) {

			Promise.all([
				getAssetMetadata(nasaId),
				getAsset(nasaId)
			])
				.then(([metadata, resources]) => {

					let _data: AssetDetailViewType

					if (metadata) {

						_data = {
							title: metadata["XMP:Title"],
							description: metadata["XMP:Description"],
							creationDate: metadata["XMP:CreateDate"],
							centerPlace: metadata["AVAIL:Center"],
							keywords: metadata["AVAIL:Keywords"],
							resource: resources ? resources[0] : ""
						}

						setDetailData(_data)

					}	            
	
				})

		}

	}, [nasaId])

	if (nasaId) {

		return (
			<DefaultTheme>				
				<div className="asset-detail-container">
					<div className="asset-detail-grid-container">
						<section className="asset-detail-resource-preview">
							<img src={detailData?.resource} alt="Full Pic" width="150" />
						</section>
						<section className="asset-description-section">
							<button className="asset-detail-button-download">
							Download
								<img src="/download_icon.png" alt="Download" width="45" />
							</button>
							<span className="asset-detail-resource-url">
								<label>{ detailData?.resource }</label>
							</span>
							<h2 className="asset-detail-title">
								<strong>
									{ detailData?.title }
								</strong>
							</h2>
							<span>
								<strong>NASA ID: </strong>{ nasaId }
							</span>
							<span>
								<p>{ detailData?.description }</p>
							</span>
							<span>
								<strong>Date Created: </strong>{ detailData?.creationDate }
							</span>
							<span>
								<strong>Center: </strong>{ detailData?.centerPlace }
							</span>
							<span>
								<strong>Keywords: </strong>{ detailData?.keywords.sort().join(", ") }
							</span>
						</section>
					</div>
				</div>
			</DefaultTheme>
		)

	}

	return null

}
