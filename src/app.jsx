import React from "react";
import './App.css';
import Game from "./components/game";

const App = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="my-5">
                        <h2 className="my-5">React tic tac toe game</h2>

                        <Game/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;