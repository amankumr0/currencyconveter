import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';



function App() {
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const swap = () => {
    const vrable = from;
    setFrom(to);
    setTo(vrable);
  }

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo);
  const convert = () => {
    setConverted(amount * currencyInfo[to]);
  }
  return (
    <div style={{ background: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80')` }}
      className="h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border p-5 bg-white/30 backdrop-blur-sm rounded-md border-gray-60">
          <form onClick={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currency={option}
                onAmountChange={(amount) => { setAmount(amount) }}
                onCurrencyChange={(currency) => { setFrom(currency) }}
                amountDisable={false}
                currencyDisable={false}
                selectCurrency={from}
              />
            </div>
            <button
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap} >
              Swap</button>
            <div className="w-full mb-4">
              <InputBox
                label="to"
                amount={converted}
                currency={option}
                onCurrencyChange={(currency) => { setTo(currency) }}
                amountDisable={true}
                currencyDisable={false}
                selectCurrency={to}
              />
            </div>
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" type="submit">
              CONVERT {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
