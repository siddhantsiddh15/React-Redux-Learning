import React from "react"

export default function Cart(props){
    return <div className=' cart'>
    <img src='https://th.bing.com/th/id/R.f85f50763e82aebba5baa290fa51e265?rik=43G0l3AMlwfnhw&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f7%2fCart-PNG-Background-Image.png&ehk=IY2HqN0Zi8MoidlsUhTsOmoEoMsyWDUY7KjlrNXW4pQ%3d&risl=&pid=ImgRaw&r=0'></img>
    <span>{props.cartData.cartItems.length}</span>
    
</div>
}