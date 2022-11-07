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
		}
	}

	generateLetterStatuses() {
		let letterStatus = {}
		for (let i = 65; i < 91; i++) {
			letterStatus[String.fromCharCode(i)] = true
		}
		console.log(letterStatus)
		return letterStatus
	}

	render() {
		return (
			<div className="App">
				<Score />
				<Solution />

				<Letters letterStatus={this.state.letterStatus}></Letters>
			</div>
		)
	}
}

export default App
