import React, { Component } from "react"

class Letter extends Component {
	selectLetter = () => {
		this.props.selectLetter(this.props.letter)
	}

	render() {
		let letter = this.props.letter
		let chosen = this.props.chosen
		return (
			<span
				className={chosen ? "nonavailable-letter" : "available-letter"}
				onClick={this.selectLetter}
			>
				{letter}
			</span>
		)
	}
}

export default Letter
