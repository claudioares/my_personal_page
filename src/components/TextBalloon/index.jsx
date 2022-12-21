import './style.css';


function TextBalloon ({description, linkStacks}) {
    return(
        <div className="balloon">
            <span>{description}</span>
            <div className='div_balloon_link'>
                <a href={linkStacks} target="_blank" >Saiba mais...</a>
            </div>
        </div>
    )
}


export default TextBalloon;