**Instructions**

1. clone repository </br> `git clone https://github.com/it14019/react-currencies-selector.git`
2. change directory <br> `cd react-currency-selector`
3. install dependencies </br> `npm install`
4. run application </br> `npm start`

**Description**

Currency select appliaction, in which you can select currency and unselect in two ways - by unchecking chekcbox or by clicking 'X' button.

![picture](/public/media/currencies-gif.gif)

*Application is not finished yet.*

Application consists of two components - `Currencies` and `SelectedCurrencies`. `Currencies` returns 9 button elements, `SelectedCurrencies` returns selected currencies, if there are any selected.

On chekcbox click is called `currencyShowHandler` function, which checks if chechbox is checked or not. If it is - `currencyValue` is set to clicked elements value and value is added to `currencies` array (if it's not already there). In component `SelectedCurrencies` `currencies` array is *mapped* through (`currencies.map()`) and selected currencies are shown. When user clicks on already checked button it's value is set to `false` and value ir removed from `currency` array, so it doesn't show anymore.

When value is still selected, next to it appears 'X' button. When it's clicked, `handleRemoveItem` function is called. It takes out selected currencies value from `currency` array and unchecks currencies checkbox.