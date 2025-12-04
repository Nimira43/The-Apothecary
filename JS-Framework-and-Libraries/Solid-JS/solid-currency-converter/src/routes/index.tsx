import { createSignal, createResource, createMemo } from 'solid-js'

function fetchRates() { }

export default function Home() { 
  const [amount, setAmount] = createSignal(1)
  const [rates] = createResource(fetchRates)

  const converted = createMemo(() => {
    if (!rates()) return 0
    return amount() * rates().rates.USD
  })

  return (
    <main class='container centre'>
      <div class='wrapper'>
        <h1 class='logo'>Currency Converter</h1>
        <label>
          GBP:
          <input
            type='number'
            value={amount()}
            onInput={
              (e) => setAmount(
                e.currentTarget.valueAsNumber
              )
            }
          />
        </label>
        <p>USD: {converted().toFixed(2)}</p>
      </div>
    </main>
  )
}