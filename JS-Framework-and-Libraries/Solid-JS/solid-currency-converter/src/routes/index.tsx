import { createSignal, createResource, createMemo, Show } from 'solid-js'

async function fetchRates() {
  const res = await fetch('https://open.er-api.com/v6/latest/GBP')
  return res.json()
}

export default function Home() {
  const [amount, setAmount] = createSignal(1)
  const [rates] = createResource(fetchRates)

  const converted = createMemo(() => {
    const data = rates()
    const usd = data?.rates?.USD
    return usd ? amount() * usd : 0
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
            onInput={(e) => {
              const v = e.currentTarget.valueAsNumber
              if (!Number.isNaN(v)) setAmount(v)
            }}
          />
        </label>

        <Show when={rates.loading}>
          <p>Loading...</p>
        </Show>

        <Show when={rates() && !rates.loading}>
          <p>USD: {converted().toFixed(2)}</p>
        </Show>
      </div>
    </main>
  )
}
