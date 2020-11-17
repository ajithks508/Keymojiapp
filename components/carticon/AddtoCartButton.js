import Button from 'react-bootstrap/Button';
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Link from 'next/link';
import React from "react";
import {addFirstProduct} from '../../functions';
const AddtoCartButton = (propsb) =>{
    const {products} = propsb;
    const [cart,setCart] = useContext(AppContext);
    const handleAddToCartClick = () => {
		if (process.browser){
            let existingCart = localStorage.getItem( 'keymoji-cart');
            if (existingCart){
            }else{
                const newCart = addFirstProduct(products);
                setCart(newCart);
            }
        }
	};
    return(
        <React.Fragment>
             <Button variant="outline-danger" size="lg" block onClick={handleAddToCartClick}>
                            ADD TO CART
            </Button>
        </React.Fragment>
    );
}
export default AddtoCartButton;