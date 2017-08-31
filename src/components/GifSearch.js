import React from 'react'

export default class GifSearch extends React.Component {
	constructor() {
		super()

		this.state = {
			userInput: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.submitValue = this.submitValue.bind(this)
	}

	// handleInput = (event) => {
	// 	this.setState({userInput: event.target.value})
	// }

	handleInput(event) {
		this.setState({userInput: event.target.value})
	}

	submitValue(event) {
		event.preventDefault()
		this.props.submitHandler(this.state.userInput)
	}

	render() {
		return (
			<div className="form-wrapper">
				<form onSubmit={this.submitValue}>
					<input type="text" value={this.state.userInput} onChange={this.handleInput}/>
				</form>
			</div>
			)
	}
}