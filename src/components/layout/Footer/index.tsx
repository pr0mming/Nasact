import React from "react"
import "./style.css"

export default function Footer() {

	return (
		<footer className="footer-container">
			<h2><strong>A small App</strong></h2>
			<div className="footer-description">
				<p>Based in the original &nbsp;
					<a className="hyperlink" href="https://images.nasa.gov" target="_blank" rel="noreferrer">
                    NASA Image and Library Website
					</a>
            , this is only for put in practice a lot of &nbsp;
					<a className="hyperlink" href="https://es.reactjs.org" target="_blank" rel="noreferrer">
                    React JS
					</a> 😁</p>
				<span className="footer-code-section">
                You can follow the source code in &nbsp;
					<a className="hyperlink" href="https://github.com" target="_blank" rel="noreferrer">
						<img src="/github_logo.png" width={ 32 } />
					</a>
				</span>
			</div>
		</footer>
	)

}
