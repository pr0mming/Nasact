import React from "react"
import { Link } from "wouter"
import "./style.css"

export default function NoMatch() {

	return (   
		<div className="nomatch-container">
			<h1>404 - Not found this page :(</h1>
			<div>
				<Link href="/">
					<a className="nomatch-button">
						Go to Home
					</a>
				</Link>
			</div>
		</div>
	)

}
