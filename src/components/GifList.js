import React from 'react'

// export default const GifList = (props) => <ul>{props.gifs.map( gif => console.log(gif))}</ul>

export default class GifList extends React.Component {
	render() {
		console.log(this.props)
		return (
			<ul>
				{this.props.gifs.map(function(gif) {
					return <li key={gif.id}><img src={gif.images.fixed_height.url} /></li>
				})}
			</ul>
			)
	}
}

GifList.defaultProps = {
	gifs: []
}