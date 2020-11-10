const Productlistbycat = (propl) =>{
    const { lst } = propl;
    return(
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
        <div className="card text-center card-product">
            <div className="card-product__img">
                <img src={ lst.image.sourceUrl} alt="Product image"/>
                <div className="favorit-items">
                    <i className="ti ti-heart"></i>
                </div>
            </div>
            <div>
                <h4 className="card-product__title"><a href="#">{ lst.name ? lst.name : '' }</a></h4>
                <p className="card-product__price"><span className="cross"><del>{ lst.regularPrice ? lst.regularPrice : '' }
                </del></span>&nbsp;&nbsp;{ lst.salePrice ? lst.salePrice : '' }</p>
            </div>
        </div>
    </div>
    );
}
export default Productlistbycat;