import React, { useEffect, useState } from "react";
import { getAsset } from "@/services/getAsset";
import { getAssetMetadata } from '@/services/getAssetMetadata';
import './index.css';

export default function AssetDetail(params: any) {

    // const { nasaId } = params;

    // const [ detailData, setDetailData ] = useState({
    //     title: '',
    //     description: '',
    //     creationDate: '',
    //     centerPlace: '',
    //     keywords: [],
    //     resources: []
    // });

    // useEffect(() => {

    //     if (nasaId) {

    //         Promise.all([
    //             getAssetMetadata({ nasaId }),
    //             getAsset({ nasaId })
    //         ])
    //         .then(([metadata, resources]) => {
    
    //             setDetailData({
    //                 title: metadata.title,
    //                 description: metadata.description,
    //                 creationDate: metadata.creationDate,
    //                 centerPlace: metadata.centerPlace,
    //                 keywords: metadata.keywords,
    //                 resources: resources
    //             });
    
    //         });

    //     }

    // }, [nasaId]);

    // if (nasaId) {

    //     return (
    //         <div className="asset-detail-container">
    //             <section>
    //                 {
    //                     detailData.resources.map((resource, i) => {
    //                         return (
    //                             <div key={i}>
    //                                 <img src={resource} alt="Full Pic" width="150" />
    //                             </div>                            
    //                         )
    //                     })
    //                 }
    //             </section>
    //             <section className="asset-description-section">
    //                 <button>Download</button>
    //                 <h2>
    //                     <strong>
    //                         { detailData.title }
    //                     </strong>
    //                 </h2>
    //                 <span>
    //                     <strong>NASA ID: </strong>{ nasaId }
    //                 </span>
    //                 <p>{ detailData.description }</p>
    //                 <span>
    //                     <strong>Date Created: </strong>{ detailData.creationDate }
    //                 </span>
    //                 <span>
    //                     <strong>Center: </strong>{ detailData.centerPlace }
    //                 </span>
    //                 <span>
    //                     <strong>Keywords: </strong>{ detailData.keywords.join(',') }
    //                 </span>
    //             </section>
    //         </div>
    //     );

    // }

    return (null);

}
