import React, { Component } from "react"
import Letter from "./letter"

class Solution extends Component {
	constructor() {
		super()
	}

	render() {
		let chosenLetters = this.props.letterStatus
		let solutionHint = this.props.solution.hint.split("")
		let solutionWord = this.props.solution.word.split("")

		return (
			<div>
				<div>
					Hint:{" "}
					{solutionHint.map((l, j) => (
						<Letter key={j} letter={l} chosen={false}></Letter>
					))}
				</div>
				<div>
					Solution:{" "}
					{solutionWord.map((l, j) =>
						chosenLetters[l] ? (
							<Letter key={j} letter={l} chosen={false}></Letter>
						) : (
							<Letter
								key={j}
								letter={"_"}
								chosen={false}
							></Letter>
						)
					)}
				</div>
			</div>
		)
	}
}

export default Solution
