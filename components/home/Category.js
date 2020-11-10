import Link from 'next/link';
const Category = (propc) =>{
    const { cat } = propc;
    return(
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <a><img src={ cat.image.sourceUrl} alt="Product image"/></a>
                </div>
                <div>
                    <h4 className="card-product__title"><a href="#">{ cat.name ? cat.name : '' }</a></h4>
                </div>
            </div>
        </div>
    );
}
export default Category;