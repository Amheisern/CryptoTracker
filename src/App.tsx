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
  //  const [cycleCoinData, setCycleCoinData] = useState([2,3,5,4,5,6,7,8])
  console.log('coinsData', coinsData)
// console.log('cycleCoinData', cycleCoinData)
  // const valueArray: number[] = []

  // function compareValue(currencies: number[]){
  // // valueArray.push(currency.priceUsd)
  // const valueArray = currencies.map (currency => {
  //   return currency.priceUsd
  // })
  
  // console.log('valueArray', valueArray)
  // // console.log('currency', currency)
// }
  function loadCoinsData() {
    async function getCoins() {
      const response = await fetch('https://api.coincap.io/v2/assets')
      if (response.ok) {
        //destructed response with const coins = const {data}
        const {data} = await response.json()
        setCoinsData(data)
        console.log('coins', data)
        // compareValue(data)
        
        }
      }
      getCoins()
    }
    console.log('getCoins', loadCoinsData)

    // function trackUsdPrice(coins: CoinType[]) {
    //   const cycleCoinData = coins.map(coin => coin.priceUsd)
    //   setCycleCoinData(cycleCoinData)
    // }
    // console.log('trackUsdPrice', trackUsdPrice)
    
  useEffect(function () {
    const interval = setInterval(function () {
      setCycles((cycles) => cycles + 1)
    }, 10000)
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
          .filter((coin) => coin.rank <= 25)
          .map(function (coin) {
            return (
              <li className="coins" key={coin.id}>
                {coin.symbol}-{coin.rank}:  {coin.name}  ({Math.round(coin.priceUsd * 100) / 10000}$)
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
