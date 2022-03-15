import React, { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import ScanningScreen from "./ScanningScreen";
import ClientCardScreen from "./ClientCardScreen";
import PaymentScreen from "./PaymentScreen";

function SelfCheckout({shopName}) {
    const [screen, setScreen] = useState("Welcome");
    switch (screen) {
        case "Welcome":
            return (
              <>  <WelcomeScreen shopName={shopName}/>
                <button onClick={() => setScreen("Scanning")}>Go to scanning</button>
            </>
            )
        case "Scanning":
            return (
                <>
                 <ScanningScreen />
                 <button onClick={() => setScreen("ClientCard")}>Go to scan client card</button>
                </>)
        case "ClientCard":
            return (
                <>
                    <ClientCardScreen />
                    <button onClick={() => setScreen("Payment")}>Go to payment</button>
                </>
            )
        case "Payment":
            return (
                <>
                    <PaymentScreen />
                    <button onClick={() => setScreen("Welcome")}>Finalize</button>
                </>
            )
        default:
            break;
    }
}

export default SelfCheckout;