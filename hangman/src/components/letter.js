import React, { Component } from "react"

class Letter extends Component {
	render() {
		let letter = this.props.letter
		let available = this.props.available
		return (
			<span
				className={
					available ? "available-letter" : "nonavailable-letter"
				}
			>
				{letter}
			</span>
		)
	}
}

export default Letter
