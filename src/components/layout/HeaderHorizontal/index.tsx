import React from "react"
import "./style.css"
import SearchBar from "@/components/SearchBar"
import Particles from "react-tsparticles"
import { tsParticles } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import { Link } from "wouter"

const particlesInit = async () => {
	await loadFull(tsParticles)
}

export default function HeaderHorizontal() {

	return (
		<section className="header-container">
			<Particles 
				id="tsparticles" 
				className="header-background"
				url="/particle_background_config.json" 
				init={ particlesInit } />
			<div className="header-items">
				<div className="header-message-items">
					<span className="header-message-container">
						<SearchBar/>
					</span>
					<span className="header-logo-container">
						<section className="header-logo-text">
							<span>
								<strong>NASA Image and Video Library</strong>
							</span>
						</section>            
						<Link href="/">
							<a>
								<img src="/nasa_logo.png" alt="NASA Logo" width={ 120 } />
							</a>
						</Link>
					</span>
				</div>
			</div>
		</section>    
	)

}
