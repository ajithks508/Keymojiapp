export const getFloatVal = ( string ) => {

	let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
	return ( null !== floatValue ) ? parseFloat( parseFloat( floatValue ).toFixed( 2 ) ) : '';

};

/**
 * Add first product.
 *
 * @param {Object} product Product
 * @return {{totalProductsCount: number, totalProductsPrice: any, products: Array}}
 */
export const addFirstProduct = ( products ) => {

	let productPrice = getFloatVal( products.salePrice );

	let newCart = {
		products: [],
		totalProductsCount: 1,
		totalProductsPrice: productPrice
	};

	const newProduct = createNewProduct( products, productPrice, 1 );
	newCart.products.push( newProduct );

	localStorage.setItem( 'keymoji-cart', JSON.stringify( newCart ) );

	return newCart;
};

export const createNewProduct = ( products, productPrice, qty ) => {

	return  {
		productId: products.productId,
		image: products.image,
		name: products.name,
		price: productPrice,
		qty,
		totalPrice: parseFloat( ( productPrice * qty ).toFixed( 2 ) )
	};

};

export const updateCart = ( existingCart, products, qtyToBeAdded, newQty = false  ) => {

	const updatedProducts = getUpdatedProducts( existingCart.products , products, qtyToBeAdded, newQty );
	const addPrice=(total,item)=>{
		total.totalPrice+=item.totalPrice;
		total.qty+=item.qty;
		return total;
	}
	let total= updatedProducts.reduce(addPrice,{totalPrice:0,qty:0});
	const updatedCart = {
		products:updatedProducts,
		totalProductsCount:parseInt(total.qty),
		totalProductsPrice:parseFloat(total.totalPrice)
	};
	localStorage.setItem('keymoji-cart',JSON.stringify(updatedCart));
	return updatedCart;
};

export const getUpdatedProducts = (existingProductsInCart,products,qtyToBeAdded,newQty=false)=>{
	const productsExistsIndex = isProductInCart(existingProductsInCart,products.productId);
	if(-1< productsExistsIndex){
		let updatedProducts = existingProductsInCart;
		let updatedProduct = updatedProducts[productsExistsIndex];
		updatedProduct.qty = (newQty)?parseInt(newQty):parseInt(updatedProduct.qty+qtyToBeAdded);
		updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.qty).toFixed(2);
		return updatedProducts;
	}else{
		let productPrice = getFloatVal(products.salePrice);
		const newProduct = createNewProduct(products,productPrice,qtyToBeAdded);
		existingProductsInCart.push(newProduct);
		return existingProductsInCart;
	}
};
export const isProductInCart = (existingProductsInCart,productId)=>{
	const returnItemThatExits = (item,index)=>{
	if (productId === DataTransferItem.productId){
		return item;
	}
};
const newArray = existingProductsInCart.filter(returnItemThatExits);
return existingProductsInCart.indexOf(newArray[0]);
};
