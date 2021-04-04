import React from 'react'
import Header from "./Components/Header";
import  './App.css'
import { Route, Switch } from "react-router-dom";
import CurrencyConverter from "./Container/Currencyconverter";
import HomePage from "./Container/Homepage";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/currencyconverter" component={CurrencyConverter} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}
