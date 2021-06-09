import React from 'react';
import './coin.css';

 export default function Coin({name,image,symbol,price,priceChange,marketCap,high,low,}){

    return(
        <div className='coin-container'>
        <div className="coin-row">
        <div className="col">
        <img src={image}/>
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
            <p className="coin-price">{price}</p>
            <p className="coin-high">{high}</p>
            <p className="coin-low">{low}</p>
            
            {priceChange <0? (
                <p className="coin-percent-red">{priceChange.toFixed(2)}%</p>
            ):(
                <p className="coin-percent-green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-marketcap">{marketCap}
            </p>
        </div>
        </div>
        </div>
    )
 }




