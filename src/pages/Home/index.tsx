import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import ListOfImageVideoLibrary from "@/components/ListOfImageVideoLibrary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SearchEngineContext } from "../../context/SearchEngineContext";
import { getImageVideoPopular } from "@/services/getImageVideoPopular";

export default function Home() {
  const pictureContext = useContext(SearchEngineContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true)

    getImageVideoPopular()
      .then((data) => {

        if (data) {

          const _pictures = data
            .filter((links) => (links.links ?? []).length)
            .map((_pic) => {
              return {
                nasaId: _pic.data[0].nasa_id,
                url: _pic.links ? _pic.links[0].href : '',
              };
            })

          pictureContext.setPictures(_pictures)

        }

      })
      .finally(() => {
        setLoading(false);
      })

  }, []);

  return (
    <section className="home-body-container">
      <div className="home-header-container">
        <Header />
      </div>
      <div className="home-list-results-container">
        <ListOfImageVideoLibrary props={{ 
            pictures: pictureContext.pictures, 
            loading: loading
        }} />
      </div>
      <div className="home-footer-results-container">
        <Footer />
      </div>
    </section>
  );
}
