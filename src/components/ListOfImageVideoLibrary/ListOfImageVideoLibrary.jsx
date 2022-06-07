import React from "react";
import './ListOfImageVideoLibrary.css';

export default function ListOfImageVideoLibrary({ props }) {

  const { assets, loading } = props;

  if (loading) {

      return (
          <span>
            <img src="assets/loading_spinner.gif" alt="Loading" width={50}/>
          </span>
      );

  }

  if (assets) {

    return (
      <div className="list-of-images-container">
        <div className="list-of-images-grid-container">
            {
              assets.map((singlePhoto, i) => (
                <a href={ `/app/detail/${ singlePhoto.data[0].nasa_id }` } className="list-of-images-grid-item" key={i}>
                  <img loading="lazy" src={singlePhoto.links[0].href} alt="Preview Pic" />
                </a>
              ))
            }
        </div>
      </div>
    );

  }
  
  return null;

}
