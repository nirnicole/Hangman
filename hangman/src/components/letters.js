import React, { Component } from "react"
import Letter from "./letter"

class Letters extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		let letters = this.props.letterStatus

		return (
			<div>
				<div>Available Letters:</div>
				{Object.keys(letters).map((l) => (
					<Letter letter={l} available={letters[l]}></Letter>
				))}
			</div>
		)
	}
}

export default Letters
