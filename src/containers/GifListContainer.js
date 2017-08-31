import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
	constructor() {
		super()

		this.state = {
			gifs: []
		}

		this.submitHandler = this.submitHandler.bind(this)
		this.fetchGifs = this.fetchGifs.bind(this)
	}

	// submitHandler = (event) => {
	// 	let searchTerm = event.target.value
	// 	fetchGifs(searchTerm)
	// }

	submitHandler(searchTerm) {
		// event.preventDefault()
		console.log(searchTerm)
		// let searchTerm = event.target.value
		this.fetchGifs(searchTerm)
	}

	// fetchGifs = (searchTerm) => {
	// 	url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`
	// 	fetch(url).then(res => res.json()).then(gifs => this.setState({ gifs }))
	// }

	fetchGifs(searchTerm) {
		let url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&limit=5`
		fetch(url).then(res => res.json()).then(gifs => this.setState({ gifs: gifs.data }))
	}

	render() {
		return (
			<div>
				<GifSearch submitHandler={this.submitHandler}/>
				<GifList gifs={this.state.gifs}/>
			</div>
			)
	}
}