import React from "react";
import "../App.css";
import Die from "./Die";
import RollBtn from "./RollBtn";
import getRandomNumber from "../util/randNumberGenerator";

export default function App() {
  const [numbersArray, setNumbersArray] = React.useState(generateArray);

  function generateArray() {
    return new Array(10).fill(0).map((_, index) => ({
      id: index, 
      value: getRandomNumber(1, 6, true),
      isheld: false
    }));
  }
  

  function RollDice() {
    setNumbersArray(prevArray =>
      prevArray.map(die => {
        if (die.isheld) {
          return die; 
        } else {
          return { ...die, value: getRandomNumber(1, 6, true) }; 
        }
      })
    );
  }
  function holdDie(id){
    setNumbersArray(prevArray =>
      prevArray.map(die => {
        if(die.id === id ) 
        return { ...die, isheld: !die.isheld }; 
        else
        return die;
        }
      )
    );
  }

  const diceElement = numbersArray.map((die, index) => (
    <Die id={die.id} handleClicks={()=>holdDie(die.id)} key={index} value={die.value} isheld={die.isheld} />
  ));

  return (
    <main>
      <div className="mainSection">
        <div className="white-container">
          <div className="dice-container">{diceElement}</div>
          <div className="RollBtn-Container">
            <RollBtn handleClicks={RollDice} />
          </div>
        </div>
      </div>
    </main>
  );
}
