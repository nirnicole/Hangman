import React, { Component } from "react"
import Letter from "./letter"

class Letters extends Component {
	constructor() {
		super()
		this.state = {}
	}
	selectLetter = (letter) => {
		this.props.selectLetter(letter)
	}

	render() {
		let letters = this.props.letterStatus

		return (
			<div>
				<div>Available Letters:</div>
				{Object.keys(letters).map((l, v) => (
					<Letter
						key={v}
						letter={l}
						chosen={letters[l]}
						selectLetter={this.selectLetter}
					></Letter>
				))}
			</div>
		)
	}
}

export default Letters
