export default function RollBtn(props) {
    return (
       <button onClick={props.isWon ? props.newGame : props.handleClicks} className="RollBtn">
          {props.isWon? "New Game" : "Reroll"}
       </button>
    );
 }
