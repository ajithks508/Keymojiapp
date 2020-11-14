import Link from 'next/link';
const Newproducts = (propn) => {
    const { pro } = propn;
    return(
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
        <div className="card text-center card-product">
            <div className="card-product__img">
                <Link  href={`singlepro/?slug=${ pro.slug }-${ pro.id }`}>
                    <a><img src={ pro.image.sourceUrl} alt="Product image"/></a>
                </Link>
                <div className="favorit-items">
                    <i className="ti ti-heart"></i>
                </div>
            </div>
            <div>
                <h4 className="card-product__title">
                    <Link  href={`/singlepro?slug=${ pro.slug }-${ pro.id }`}>
                        <a href="#">{ pro.name ? pro.name : '' }</a>
                    </Link>
                </h4>
                <p className="card-product__price"><span className="cross"><del>{ pro.regularPrice ? pro.regularPrice : '' }
                </del></span>&nbsp;&nbsp;{ pro.salePrice ? pro.salePrice : '' }</p>
            </div>
        </div>
    </div>
    );
}
export default Newproducts;