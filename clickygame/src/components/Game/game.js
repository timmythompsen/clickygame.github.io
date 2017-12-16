import React, { Component } from 'react'
import './game.css'
import images from "./images.json"

class Game extends Component {
	state = {
		score: 0,
		guessed: [],
    message: ""
	}

	handleClick(e) {
		const clicked = e.target.dataset.id
    if (this.state.guessed.indexOf(clicked) > -1) {
      this.setState({
        score: 0,
        guessed: [],
        message: "You lose!"
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        guessed: this.state.guessed.concat(clicked),
        message: ""
      })
    }
	}

	render() {
    let imagesArray = [].concat(images)
    imagesArray = shuffle(imagesArray, [])
    console.log('Array shuffle: ', imagesArray)
		return (
			<div className="game">
        <h2>Score: {this.state.score} <span className="message">{this.state.message}</span></h2>
				<div className="pics">
          { imageArray.map(flag => (
              <Pic 
                handleClick={this.handleClick.bind(this)}
                key={images.id}
                link={images.link}
                id={images.id} />
            )
          )}
        </div>
			</div>
		)
	}

}

const Pic = props => {
  console.log('props:', props)
	return (
		<div className="pic">
			<img 
				src={ props.link }
				onClick={props.handleClick}
				alt={props.link}
				data-id={props.id}
				/>
		</div>
	);
}

function shuffle(arr1, arr2) {
  if (arr1.length < 1) {
    return arr2
  } else {
    let randomIndex = Math.floor(Math.random() * arr1.length)
    let arr = arr1
    console.log(randomIndex)
    arr2.push(arr1[randomIndex])
    arr.splice(randomIndex, 1)
    return shuffle(arr, arr2)
  }
}

export default Game