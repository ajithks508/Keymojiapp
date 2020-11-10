const Productlistbycat = (propl) =>{
    const { list } = propl;
    return(
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
        <div className="card text-center card-product">
            <div className="card-product__img">
                <img src={ list.image.sourceUrl} alt="Product image"/>
                <div className="favorit-items">
                    <i className="ti ti-heart"></i>
                </div>
            </div>
            <div>
                <h4 className="card-product__title"><a href="#">{ list.name ? list.name : '' }</a></h4>
                <p className="card-product__price"><span className="cross"><del>{ list.regularPrice ? list.regularPrice : '' }
                </del></span>&nbsp;&nbsp;{ product.salePrice ? product.salePrice : '' }</p>
            </div>
        </div>
    </div>
    );
}
export default Productlistbycat;