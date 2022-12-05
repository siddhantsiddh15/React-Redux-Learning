import React from 'react';
import CartContainer from '../containers/CartContainer';
export default function Home(props){
    console.warn('Home', props)
    
    return <>
    <CartContainer/>
    <h1>Home Component</h1>
    <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://clipart.info/images/ccovers/1505918647iphone-x-png.png'/>
            </div>
        <div className = 'text-wrapper item'>
            <span>
                iPhone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className='btn-wrapper item'>
            <button onClick = {() => 
                {props.handleAddToCart({
                    price: 1000,
                    name: 'iPhoneX'
                })}
            }>Add to Cart</button>
        </div>
        <div className='btn-wrapper item'>
            <button onClick = {() => 
                {props.handleRemoveFromCart()}
            }>Remove From Cart</button>
        </div>
    </div>
    </>
}
