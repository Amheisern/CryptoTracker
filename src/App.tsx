import React, { useState } from 'react'

type CoinType = {
  id: number
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
  const [coinsData, setCoinsData] = useState<CoinType[]>([
    { id: 1, rank: '1', name: 'Bitcoin', priceUsd: '1' },
    { id: 2, rank: '2', name: 'Ethereum', priceUsd: '2' },
    { id: 3, rank: '3', name: 'Ripple', priceUsd: '3' },
    { id: 4, rank: '4', name: 'Bitcoin Cash', priceUsd: '4' },
  ])
  console.log('coinsData', coinsData)

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
      <ul>
        {coinsData.map(function (coin) {
          return (
            <li key={coin.id}>
              {coin.rank}
              {coin.name}
              {coin.priceUsd}
            </li>
          )
        })}
      </ul>
      <footer>Created by Amheiser</footer>
    </div>
  )
}
