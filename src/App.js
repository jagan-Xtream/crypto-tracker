import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';

function App() {

  const [coins,setCoins]=useState([]);

  const [search,setSearch]=useState("");



  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
      setCoins(res.data);
    })
    .catch(error=>console.log("error"));
  },[]);

  const handleChange=e=>{
    setSearch(e.target.value)
  }


  const filteredCoins=coins.filter(coin=>coin.name.toUpperCase().includes(search.toUpperCase()))

  return (
    <div className="App">
    <form className="search-form">
      <input onChange={handleChange} className="search-bar" type="text" placeholder="Search for currency..."/>
    </form>
    <div className='coins'>
    {filteredCoins.map(coin=>(
      <Coin name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} 
        priceChange={coin.price_change_percentage_24h} marketCap={coin.market_cap}
         high={coin.high_24h} low={coin.low_24h} />
    ))}
    </div>
    </div>
  );
}

export default App;
