import { useContext } from 'react';
import { AppContext } from "./../context/AppContext";
import Link from 'next/link';

const Carticon = () => {
    const[ cart,setCart ] = useContext( AppContext);
    const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
    const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';
    return(
        <div>
            <i className="ti ti-shopping-cart"></i><br/>
                        <label>Cart<label>'('{ productsCount ?productsCount:''}')'</label></label>
        </div>
    )
};
export default Carticon;
