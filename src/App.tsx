import React, { useState } from 'react'

type CoinType = {
  id: String | null
  rank: String | null
  // symbol: String | null
  name: String | null
  // supply: String | null
  // maxSupply: String | null
  // marketCapUsd: String | null
  // volumeUsd24Hr: String | null
  priceUsd: String | null
  // changePercent24Hr: String | null
  // vwap24Hr: String | null
  // explorer: String | null
}
export function App() {
  const [coinsValue, setCoinsValue] = useState<CoinType[]>([])

  async function getCoins() {
    const response = await fetch('https://api.coincap.io/v2/assets')
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
    getCoins()
  }
  return (
    <div>
      <header>
        <h1>Crypto Currency Price Tracker</h1>
      </header>
      <section>
        <div className="tracker">bitcoin</div>
        <div className="tracker">bitcoin</div>
        <div className="tracker">bitcoin</div>
        <div className="tracker">bitcoin</div>
        <div className="tracker">bitcoin</div>
      </section>
      <footer>Created by Amheiser</footer>
    </div>
  )
}
