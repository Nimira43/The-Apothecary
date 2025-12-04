function fetchRates() { }

export default function Home() { 
  return (
    <main class='container centre'>
      <div class='wrapper'>
        <h1 class='logo'>Currency Converter</h1>
      </div>
      <label>
        GBP:
        <input
          type='number'
        />
      </label>
      <p>USD: $45</p>
    </main>
  )
}