import React, { useEffect, useState } from 'react'

type CoinType = {
  id: number
  rank: String | null
  symbol: String | null
  name: String | null
  supply: String | null
  maxSupply: String | null
  marketCapUsd: String | null
  volumeUsd24Hr: String | null
  priceUsd: String | null
  changePercent24Hr: String | null
  vwap24Hr: String | null
  explorer: String | null
}
export function App() {
  const [coinsData, setCoinsData] = useState<CoinType[]>([])
  console.log('coinsData', coinsData)

  function loadCoinsData() {
    async function getCoins() {
      const response = await fetch('https://api.coincap.io/v2/assets')
      if (response.ok) {
        const coins = await response.json()
        setCoinsData(coins.data)
        console.log('coins', coins)
      }
    }
    getCoins()
  }
  console.log('getCoins', loadCoinsData)
  useEffect(loadCoinsData, [])
  return (
    <div>
      <header>
        <h1>Crypto Currency Price Tracker</h1>
      </header>
      <ul>
        {coinsData.map(function (coin) {
          return <li key={coin.id}>{coin.name}</li>
        })}
      </ul>
      <footer>Created by Amheiser</footer>
    </div>
  )
}
