import React from "react"
import { Route, Switch } from "wouter"
import "./style.css"
import Home from "../../pages/Home"
import NoMatch from "../../pages/NoMatch"
import { SearchEngineProvider } from "../../context/SearchEngineContext"
import AssetDetail from "@/pages/AssetDetail"
import SearchResults from "@/pages/SearchResults"

export default function App() {

	return (
		<SearchEngineProvider>
			<section className="app-content">
				<section className="app-content-items">

					<Switch>
						<Route
							path="/"
							component={ Home }/>
            
						<Route
							path="/detail/:nasaId"
							component={ AssetDetail }/>

						<Route
							path="/search-results/:keyword/:page"
							component={ SearchResults }/>

						<Route>
							<NoMatch/>
						</Route>
					</Switch>
          
				</section>
			</section>
		</SearchEngineProvider>
	)

}
