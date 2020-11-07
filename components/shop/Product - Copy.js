const Product = (props) =>{
    const { product } = props;
    return(
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <img src={ product.image.sourceUrl} alt="Product image"/>
                    <div className="favorit-items">
                        <i className="ti ti-heart"></i>
                    </div>
                </div>
                <div>
                    <h4 className="card-product__title"><a href="#">{ product.name ? product.name : '' }</a></h4>
                    <p className="card-product__price"><span className="cross"><del>{ product.regularPrice ? product.regularPrice : '' }
                    </del></span>&nbsp;&nbsp;{ product.salePrice ? product.salePrice : '' }</p>
                </div>
            </div>
        </div>
    );
}
export default Product;