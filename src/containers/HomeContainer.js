import {connect} from 'react-redux';
import {removeFromCart, addToCart } from '../services/actions/action';
import React from "react";
import Home from '../components/Home';


const mapDispatchToProps = dispatch => ({
    handleAddToCart : data => dispatch(addToCart(data)),
    handleRemoveFromCart: data => dispatch(removeFromCart(data))
})

const mapStateToProps = state => ({
    cartData: state
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)