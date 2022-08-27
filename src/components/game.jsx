import React from "react";
import Board from "./board";

class Game extends React.Component {
    state = {
        history: [
            {
                squares: Array(9).fill(null)
            }
        ]
    }

    onClick = i => {
        console.log(i);
    }


    render() {
        return(
            <div>
                <Board onClick={this.onClick} square={this.state.history[0]}/>
            </div>
        );
    }
}

export default Game;