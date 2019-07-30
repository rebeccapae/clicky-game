import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import flowers from "./components/flowers.json"
import Points from "./components/Points"

class App extends Component {
    state = {
        flowers,
        score: 0,
    };

    changePicture = id => {
        this.shuffleArray(flowers)
        this.state.score ++
    }

    shuffleArray(flowers) {
        for (let i = flowers.length - 1; i > 0 ; i --) {
            const j = Math.floor(Math.random() * ( i + 1));
            [flowers[i], flowers[j]] = [flowers[j], flowers [i]]
        }
        this.setState ({ flowers })
    };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Points>Score: {this.state.score} </Points>
        {this.state.flowers.map(flower => (
          <Cards
            id={flower.id}
            image={flower.image}
            changePicture={this.changePicture}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
