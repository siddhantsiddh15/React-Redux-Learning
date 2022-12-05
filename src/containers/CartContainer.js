import {connect} from 'react-redux';
import React from "react";
import Cart from '../components/Cart';


const mapDispatchToProps = dispatch => ({
    })

const mapStateToProps = state => ({
    cartData: state
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart)