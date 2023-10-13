import { useId, useRef } from 'react';
import "./Input.css"

const InputBox = ({
    // eslint-disable-next-line react/prop-types
    onAmountChange, onCurrencyChange, currency = [], selectCurrency = "usd", amountDisable = false,
    // eslint-disable-next-line react/prop-types
    currencyDisable = false, amount, classname, label,
}) => {
    const inRef = useRef(null);
    const selectFun = () => {
        inRef?.current.select()
    }
    const amountId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-m flex ${classname}`}>
            <div className="w-1/2 text-lg">
                <label className="text-black/50 mb-2 inline-block" htmlFor={amountId}>
                    {label}
                </label>
                <input
                    onClick={selectFun}
                    ref={inRef}
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => {
                        onAmountChange && onAmountChange(e.target.value)
                    }}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">
                    CURRENCY TYPE
                </p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
                    value={selectCurrency}
                    disabled={currencyDisable}>
                    {
                        currency.map(e => (<option key={e} >{e}</option>))
                    }
                </select>
            </div>

        </div>
    );
}

export default InputBox;
