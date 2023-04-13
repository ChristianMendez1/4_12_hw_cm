import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  //setup
  let [creditcard, setCreditCard] = useState(Number);
  let [message, setMessage] = useState("");
  const prevCreditCard = useRef('')


  //Luhn Algorithm
  function Validcard(creditcard) {

  let creditCardNumber = creditcard.toString().split('').map(Number);

  for(let i=creditCardNumber.length - 2; i >= 0; i = i - 2){

    let iValue = creditCardNumber[i];

    iValue = iValue * 2

    if (iValue > 9){
        iValue = iValue % 10 + 1;
    }

    creditCardNumber[i] = iValue;
 }

    let total = 0;

    for(let i = 0; i < creditCardNumber.length; i++){
        total += creditCardNumber[i];
    }

    return total % 10 == 0
  }

  //useeffect checks if creditcard is valid
  useEffect(() => {
    prevCreditCard.current = creditcard
    if(Validcard(prevCreditCard.current) == true){
      setMessage("Valid");
    } else {
      setMessage("Invalid");
    }
    console.log( Validcard(prevCreditCard.current) )
  }, [creditcard]);

  //html
   return (
    <div>
      <form>
        <p>Enter Credit Card Number</p>
        <input value={creditcard} onChange={e => setCreditCard(e.target.value)}/>
        <p> {message} </p>
      </form>
    </div>
   );
}
export default App; 