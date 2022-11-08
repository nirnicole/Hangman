import "./App.css"
import Score from "./components/score"
import Solution from "./components/solution"
import Letters from "./components/letters"
import React, { Component } from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			letterStatus: this.generateLetterStatuses(),
			solution: {
				word: "HELLO",
				hint: "HI",
			},
			score: 100,
		}
	}

	generateLetterStatuses() {
		let letterStatus = {}
		for (let i = 65; i < 91; i++) {
			letterStatus[String.fromCharCode(i)] = false
		}
		return letterStatus
	}

	selectLetter = (letter) => {
		if (!this.state.letterStatus[letter]) {
			let scoreToUpdate = this.state.solution.word
				.split("")
				.includes(letter)
				? 0
				: 20
			let newScore = this.state.score - scoreToUpdate
			this.setState({
				score: newScore,
				letterStatus: { ...this.state.letterStatus, [letter]: true },
			})
		}
	}

	render() {
		return (
			<div className="App">
				<Score score={this.state.score} />

				<Letters
					letterStatus={this.state.letterStatus}
					selectLetter={this.selectLetter}
				></Letters>
				<Solution
					solution={this.state.solution}
					letterStatus={this.state.letterStatus}
				/>
			</div>
		)
	}
}

// {
// 	A: false,
// 	B: false,
// 	C: false,
// 	D: false,
// 	E: true,
// 	F: false,
// 	G: false,
// 	H: false,
// 	I: false,
// 	J: false,
// 	K: false,
// 	L: false,
// 	M: false,
// 	N: false,
// 	O: false,
// 	P: false,
// 	Q: false,
// 	R: false,
// 	S: true,
// 	T: false,
// 	U: false,
// 	V: false,
// 	W: false,
// 	X: false,
// 	Y: true,
// 	Z: false
//   }

export default App
