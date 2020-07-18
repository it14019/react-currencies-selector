import React from 'react';
import Button from 'react-bootstrap/Button';

const Currencies = (props) => {
    return (
        <div>
            <Button className="currency-button" variant="primary">
                <input
                    className="checkbox css-checkbox"
                    id="eur"
                    type="checkbox"
                    value="eur"
                    onClick={props.currencyShowHandler}
                />
                <label className="css-label" htmlFor="eur">EUR</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="pln"
                    className="checkbox"
                    type="checkbox"
                    value="pln"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="pln">PLN</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="gel"
                    className="checkbox"
                    type="checkbox"
                    value="gel"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="gel">GEL</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="dkk"
                    className="checkbox"
                    type="checkbox"
                    value="dkk"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="dkk">DKK</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="czk"
                    className="checkbox"
                    type="checkbox"
                    value="czk"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="czk">CZK</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="gbp"
                    className="checkbox"
                    type="checkbox"
                    value="gbp"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="gbp">GBP</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="sek"
                    className="checkbox"
                    type="checkbox"
                    value="sek"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="sek">SEK</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="usd"
                    className="checkbox"
                    type="checkbox"
                    value="usd"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="usd">USD</label>
            </Button>

            <Button className="currency-button" variant="primary">
                <input
                    id="rub"
                    className="checkbox"
                    type="checkbox"
                    value="rub"
                    onClick={props.currencyShowHandler}
                />
                <label htmlFor="rub">RUB</label>
            </Button>

        </div>
    );
}

export default Currencies;