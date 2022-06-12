import React from "react";
import { Link } from "wouter";
import { PictureType } from "../../context/types/SearchEngineType";
import './style.css';

interface ListOfImagesType {
  pictures: PictureType[];
  loading: boolean
}

export default function ListOfImageVideoLibrary({ props }: { props: ListOfImagesType }) {

  if (props.loading) {

    return (
      <span>
        <img src="/loading_spinner.gif" alt="Loading" width={50}/>
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
