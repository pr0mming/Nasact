import React, { FormEvent, useState } from "react"
import { useLocation } from "wouter"
import "./style.css"

export default function SearchBar() {

	const [ inputValue, setInputValue ] = useState("")
	const [, setLocation] = useLocation()

	const handleInputChange = (e: FormEvent) => {

		e.preventDefault()

		const search = inputValue
		const page = "1"

		setLocation(`/search-results/${ search }/${ page }`, {
			replace: true
		})

	}

	return (
		<>
			<section className='search-bar-container'>
				<form className='search-bar-form' onSubmit={ handleInputChange }>
					<input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='Search for ...(e.g. "Orion")' maxLength={50} />
					<button onClick={ handleInputChange }>
						<img src='/search_icon.png' alt='Search Buton Icon' width={ 45 } />
					</button>
				</form>			
			</section>
			<div className="search-bar-options-container">
				<div className="search-bar-option">
					<input type={"checkbox"} defaultChecked={true} />
					<label>Images</label>
				</div>
				<div className="search-bar-option">
					<input type={"checkbox"} defaultChecked={true} />
					<label>Video</label>
				</div>
				<div className="search-bar-option">
					<input type={"checkbox"} defaultChecked={true} />
					<label>Audio</label>
				</div>
			</div>
		</>
		
	)
}