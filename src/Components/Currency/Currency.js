import React from "react";
import PropTypes from 'prop-types'
import './Currency.css'

const  Currency = (props) => {
  
   const {
      currencyMenu,
      selectCurrency,
      onChangeHandler,
      amount,
      onHandler,
   } = props
  
    return (
      <div className="Currency">
        <input type="number" value={amount} onChange={onHandler}/>

        <select value={selectCurrency} onChange={onChangeHandler}>
          {currencyMenu.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
    );
  }

  Currency.prototype = {
    currencyMenu : PropTypes.array,
    selectCurrency : PropTypes.string,
    onChangeHandler : PropTypes.func,
    amount : PropTypes.number,
    onHandler : PropTypes.func
  }

export default Currency;