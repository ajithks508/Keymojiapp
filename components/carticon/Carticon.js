import { useContext } from 'react';
import { AppContext } from "./../context/AppContext";
import React from "react";

const Carticon = () => {
    const[ cart ] = useContext( AppContext);
    const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
    const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';
    return(
       <React.Fragment>
            <div className="woo-next-cart-wrap">
                <span className="woo-next-cart-icon-container">
                    <i className="ti ti-shopping-cart woo-next-cart-icon"/>
                    { productsCount ? <span className="woo-next-cart-count">{ productsCount }</span> : '' }
                </span>
            </div>
            <i style={{fontSize:"10px",color:"black"}}>Cart</i>
       </React.Fragment>
    )
};
export default Carticon;
