import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Currency from "../Components/Currency/Currency";


const BASE_URL =
  "https://api.openrates.io/latest";

const  CurrencyConverter = (props) => {

  const [currencyOption, setCurrencyOption] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRates, setExchangeRates] = useState()
  const [amount,setAmount]= useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let fromAmount, toAmount;
    if(amountInFromCurrency){
      fromAmount = amount;
      toAmount = amount * exchangeRates;
    }else{
      toAmount = amount;
      fromAmount = amount / exchangeRates;
    }    
  

     
  useEffect(() => {
    fetch(BASE_URL).then(response => response.json())
    .then(resData => {
      setCurrencyOption([resData.base,...Object.keys(resData.rates)])
      setFromCurrency(resData.base)
      setToCurrency(Object.keys(resData.rates)[0])
      setExchangeRates(resData.rates[Object.keys(resData.rates)[0]])
      

    }).catch((error) => {
      console.log(error)
    })
  }, [])

   useEffect(() => {
          
      if(fromCurrency !== undefined && toCurrency !== undefined){
        fetch(`${BASE_URL}?base=${fromCurrency}&symbol=${toCurrency}`).then(response => response.json())
        .then(data => setExchangeRates(data.rates[toCurrency]))
        .catch(error => console.log(error))
      }

        

   },[fromCurrency, toCurrency])






  const onChangeFromChecker = (e) =>{
       setAmount(e.target.value);
       setAmountInFromCurrency(true)
  }
  const onChangeToChecker = (e) =>{
    setAmount(e.target.value);
    setAmountInFromCurrency(false)
}
  
    return (
      <ConverterMain>
        <h1>Convert Currency</h1>
        
        <Calculation>
          <Currency currencyMenu={currencyOption} selectCurrency={fromCurrency} onChangeHandler={(e) => setFromCurrency(e.target.value)} amount={fromAmount} onHandler={onChangeFromChecker}/>
              <span>=</span>
          <Currency currencyMenu={currencyOption} selectCurrency={toCurrency} onChangeHandler={(e) => setToCurrency(e.target.value)} amount={toAmount} onHandler={onChangeToChecker}/>
        </Calculation>
      </ConverterMain>
    );
}

export default CurrencyConverter;

const ConverterMain = Styled.div`
    background:linear-gradient(#FE6B8B, #FF8E53);
    text-align: center;
    height: 100vh;
    h1{
      font-weight: 400;
      font-size: 40px;
      color: #3c8a24;
    }
`;
const Calculation = Styled.div`
display: flex;
margin: 100px auto;
text-align: center;
align-items: center;
justify-content: center;
width: 100%;
height: 100px;
background: transparent;
color: black; 
  span{
    font-size: 30px;
    font-weight: 900;
  } 
`;