import Link from 'next/link';
const Relatedproducts = (propl) =>{
    const { cat } = propl;
    return(
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
        <div className="card text-center card-product">
            <div className="card-product__img">
                <Link  href={`singlepro/?slug=${ cat.slug }-${ cat.id }`}>
                    <a><img src={ cat.image.sourceUrl} alt="Product image"/></a>
                </Link>
                <div className="favorit-items">
                    <i className="ti ti-heart"></i>
                </div>
            </div>
            <div>
                <h4 className="card-product__title">
                    <Link  href={`/singlepro?slug=${ cat.slug }-${ cat.id }`}>
                        <a href="#">{ cat.name ? cat.name : '' }</a>
                    </Link>
                </h4>
                <p className="card-product__price"><span className="cross"><del>{ cat.regularPrice ? cat.regularPrice : '' }
                </del></span>&nbsp;&nbsp;{ cat.salePrice ? cat.salePrice : '' }</p>
            </div>
        </div>
    </div>
    );
}
export default Relatedproducts;