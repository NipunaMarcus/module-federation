import "./Payment.css"

function Payment() {
    return (
        <div className="payment">
            <h3>Remote 2: Payment</h3>
            <div className="payment-card">
                <p>card number: </p>
                <input type={'text'} />
            </div>
        </div>
    );
}

export default Payment;