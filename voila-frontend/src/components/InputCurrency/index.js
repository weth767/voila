import React from "react"
import IntlCurrencyInput from "react-intl-currency-input"

const currencyConfig = {
    locale: "pt-BR",
    formats: {
        number: {
            BRL: {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            },
        },
    },
};

const InputCurrency = () => {
    const handleChange = (event, value, maskedValue) => {
        event.preventDefault();
    };

    return(
        <IntlCurrencyInput currency="BRL" config={currencyConfig}
                           onChange={handleChange} />
    );
}

export default InputCurrency;
