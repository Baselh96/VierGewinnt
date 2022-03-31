import "./App.css";
import { logic } from "./logic/index";
import React from "react";

function App() {
  const [array, setArray] = React.useState(Array(49).fill(0));
  const [player, setPlayer] = React.useState(1);

  const nextPlayer = () => {
    setPlayer(player === 1 ? 2 : 1);
  };

  const move = (position) => {
    if (array[position] !== 1 || array[position] !== 2) {
      array[position] = player;
      setArray([...array]);
      if (logic(array, position)) return true;
      nextPlayer();
    }
    return false;
  };

  const action = (index) => {
    var newIndex = index;
    while (newIndex + 7 <= 48) {
      if (newIndex + 7 <= 48 && array[newIndex + 7] === 0) {
        newIndex += 7;
      } else {
        break;
      }
    }
    if (move(newIndex)) {
      document.getElementById("background").style.zIndex = 1;
    }
    console.log(array);
  };

  const reset = () => {
    setPlayer(1);
    document.getElementById("background").style.zIndex = -1;
    setArray(Array(49).fill(0));
  };
  return (
    <>
      <div className="app">
        {array.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div
                className="box_kreis"
                id={"kreis" + index}
                style={{
                  background:
                    item === 1 ? "red" : item === 2 ? "green" : "white",
                }}
                onClick={(e) => action(index)}
              ></div>
            </div>
          );
        })}
      </div>
      <div
        className="div_preview_background"
        id="background"
        //onClick={() => setPreview(null)}
      >
        <h2> Winner is player {player === 1 ? "red" : "green"}</h2>
        <br />
        <button className="button" onClick={reset}>
          reset
        </button>
      </div>
    </>
  );
}

export default App;
