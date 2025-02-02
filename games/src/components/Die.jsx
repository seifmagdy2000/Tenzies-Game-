export default function Die(props){
    const dieStyle = {
        backgroundColor: props.isHeld ? "green" : null
     }
    return(
    <button style={dieStyle} onClick={props.handleClicks} type="submit">{props.value}</button>)
}  