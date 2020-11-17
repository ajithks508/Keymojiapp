export const getFloatVal = ( string ) => {

	let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
	console.warn( 'floatval', floatValue );
	return ( null !== floatValue ) ? parseFloat( parseFloat( floatValue ).toFixed( 2 ) ) : '';

};
export const addFirstProduct = ( products ) =>{
	let productPrice = getFloatVal(products.salePrice);

	let newCart = {
		product: [],
		totalProductsCount: 1,
		totalProductsPrice: productPrice
	};
	const newProduct = createNewProduct(products,productPrice,1);
	newCart.product.push(newProduct);
	localStorage.setItem('keymoji-cart',JSON.stringify(newCart));
	return newCart;
};
export const createNewProduct = ( products,productPrice,qty) =>{
	return  {
		productId: products.id,
		image: products.image,
		name: products.name,
		price: productPrice,
		qty,
		totalPrice: parseFloat( ( productPrice * qty ).toFixed( 2 ) )
	};
}