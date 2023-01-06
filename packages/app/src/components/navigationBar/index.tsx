import { useNavigate } from "react-router-dom";
import { Suspense } from "react";
import React from "react";

// Load the button component from homepage remote module.
const Button = React.lazy(() => import('homepage/Button'));

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
                    <Suspense fallback={<div>Loading...</div>} >
                        <Button caption="Home" onClick={navigateToHome} />
                    </Suspense>
                </div>
                <div className='nav-button'>
                    <Suspense fallback={<div>Loading...</div>} >
                        <Button caption="Payment" onClick={navigateToPayment} />
                    </Suspense>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;