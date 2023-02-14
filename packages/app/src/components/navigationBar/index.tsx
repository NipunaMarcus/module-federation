import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();
    const navigateToPayment = () => {
        navigate("/payment");
    }

    const navigateToHome = () => {
        navigate("/home");
    }
    return (
        <div className='navBar'>
            <nav className='nav-bar'>
                <div className='nav-button'>
                    <button onClick={navigateToHome} > Home </button>
                </div>
                <div className='nav-button'>
                    <button onClick={navigateToPayment} > Payment </button> 
                </div>
            </nav>
        </div>
    );
}

export default Navigation;