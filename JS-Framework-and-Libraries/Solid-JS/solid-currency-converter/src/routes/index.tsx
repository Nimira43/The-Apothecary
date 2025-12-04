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
    <main class='converter'>
      <div class='wrapper'>
        <h1 class='title'>Currency Converter</h1>
        <div class='field'>
          <label for='gbp'>GBP</label>
          <input
            id='gbp'
            type='number'
            value={amount()}
            onInput={(e) => {
              const v = e.currentTarget.valueAsNumber
              if (!Number.isNaN(v)) setAmount(v)
            }}
          />
        </div>
        <Show when={rates.loading}>
          <p class='status'>Loading...</p>
        </Show>
        <Show when={rates() && !rates.loading}>
          <div class='result'>
            <span>USD</span>
            <strong>USD: {converted().toFixed(2)}</strong>
          </div>
        </Show>
      </div>
    </main>
  )
}
