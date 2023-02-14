import "./Button.css"

export function Button ({caption = "Shared Button", onClick = ()=>{} }) {
    return (
    <button className='shared-btn' onClick={onClick}>{caption}</button>
    );
}
