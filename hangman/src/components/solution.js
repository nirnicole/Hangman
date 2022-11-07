import React, { Component } from "react"

class Solution extends Component {
	constructor() {
		super()
		this.state = {
			letters: ["_", "_", "_", "_"],
		}
	}

	render() {
		return (
			<div>
				{this.state.letters.map((l) => (
					<span>{l}</span>
				))}
			</div>
		)
	}
}

export default Solution
