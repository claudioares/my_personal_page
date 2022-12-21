import './style.css';


function TextBalloon ({description}) {
    return(
        <div className="balloon">
            <span>{description}</span>
        </div>
    )
}


export default TextBalloon;