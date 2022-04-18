import React, { useEffect, useState } from 'react'

type CoinType = {
  id: number
  rank: number
  symbol: String | null
  name: String | null
  supply: String | null
  maxSupply: String | null
  marketCapUsd: String | null
  volumeUsd24Hr: String | null
  priceUsd: number
  changePercent24Hr: String | null
  vwap24Hr: String | null
  explorer: String | null
}
export function App() {
  const [coinsData, setCoinsData] = useState<CoinType[]>([])
  const [cycles, setCycles] = useState<number>(0)
  // const [cycleCoinData, setCycleCoinData] = useState([])
  console.log('coinsData', coinsData)

  function loadCoinsData() {
    async function getCoins() {
      const response = await fetch('https://api.coincap.io/v2/assets')
      if (response.ok) {
        const coins = await response.json()
        setCoinsData(coins.data)
        console.log('coins', coins)
        const track = localStorage.setItem(
          'coinValue',
          JSON.stringify(coins.priceUsd)
        )
        console.log(track)
      }
    }
    getCoins()
  }
  console.log('getCoins', loadCoinsData)

  useEffect(function () {
    const interval = setInterval(function () {
      setCycles((cycles) => cycles + 1)
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(loadCoinsData, [cycles])

  return (
    <div>
      <header>
        <h1>Crypto Currency Price Tracker</h1>
        <h2>{cycles}</h2>
      </header>
      <ul>
        {coinsData
          .filter((coin) => coin.rank <= 5)
          .map(function (coin) {
            return (
              <li className="coins" key={coin.id}>
                {coin.symbol}-{coin.rank}: {coin.name} ({Math.round(coin.priceUsd * 100) / 10000}$)
              </li>
            )
          })}
      </ul>
      <footer>
        <p>Created by Amheiser</p>
        </footer>
    </div>
  )
}
