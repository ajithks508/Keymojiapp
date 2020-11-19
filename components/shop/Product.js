import Link from 'next/link';
const Product = (propsop) =>{
    const { cat } = propsop;
    return(
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
            <div className="card-product__img">
                    <Link  href={`/listproduct?slug=${ cat.slug }-${ cat.id }`}>
                        <a><img src={cat.image?cat.image.sourceUrl:''} alt="Product image"/></a>
                    </Link> 
            </div>
                <div>
                    <h4 className="card-product__title">
                        <Link  href={`/listproduct?slug=${ cat.slug }-${ cat.id }`}>
                            <a href="#">{ cat.name ? cat.name : '' }</a>
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}
export default Product;