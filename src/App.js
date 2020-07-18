import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Currencies from './components/Currencies';
import SelectedCurrencies from './components/SelectedCurrencies';

function App() {

  const [showCurrencyValue, setShowCurrencyValue] = useState({
    currencyValue: '',
    checked: false
  });

  const [currencies, setCurrencies] = useState([])

  const currencyShowHandler = (event) => {

    if (!event.target.checked) {
      setShowCurrencyValue({ currencyValue: '', checked: false })

      let index = currencies.findIndex(x => x.currencyValue === event.target.value);
      currencies.splice(index, 1);

    } else {

      //on first click when currency is selected, empty value is shown. needs to be fixed
      setShowCurrencyValue({ currencyValue: event.target.value })

      if (!currencies.some(item => item.currencyValue === event.target.value)) {
        setCurrencies([...currencies, showCurrencyValue])

        //console.log(currencies)
        // console.log(showCurrencyValue.currencyValue) //empty pirmajai vērtībai, tālāk aizpildās ar currency value
        // console.log(event.target.value) //eur
      }
    }
  };

  const handleRemoveItem = (currencyValue) => {

    setCurrencies(currencies => currencies.filter(item => item.currencyValue !== currencyValue))
    const currencyToUncheck = document.getElementsByClassName("checkbox");
    currencyToUncheck[currencyValue].checked = false;
  }

  return (
    <div>
      <span className="title">Currencies Selector</span>
      <div className="currency-wrapper">

        <SelectedCurrencies
          currencies={currencies}
          handleRemoveItem={handleRemoveItem}
          checked={showCurrencyValue.checked}
        />
        <Currencies currencyShowHandler={currencyShowHandler} />

      </div>
    </div>
  );
}

export default App;