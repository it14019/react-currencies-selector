import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const SelectedCurrencies = (props) => {
    return (
        <div className="show-selected-currencies">
            {props.currencies.map(({ currencyValue }) => (
                <div>
                    <Button
                        type="button"
                        className="selected-currency-button"
                        variant="light"
                        value={currencyValue}
                        onClick={() => props.handleRemoveItem(currencyValue)}>
                        {currencyValue}
                        <Badge variant="light">X</Badge>
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default SelectedCurrencies;