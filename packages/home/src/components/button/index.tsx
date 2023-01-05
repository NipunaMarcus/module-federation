import "./Button.css"

function Button ({caption = "Shared Button", onClick = ()=>{} }) {
    return (
    <button className='shared-btn' onClick={onClick}>{caption}</button>
    );
}

export default Button;