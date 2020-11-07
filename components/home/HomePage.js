import Carousel from 'react-bootstrap/Carousel';
const HomePage = () =>{
    return(
        <div className="homecontainer">
        
                <Carousel>
                    <Carousel.Item interval={8000}>
                        <img className="d-block w-100" src="http://localhost/wordpress/wp-content/uploads/2020/11/slider.png" alt="First slide"/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img
                        className="d-block w-100" src="http://localhost/wordpress/wp-content/uploads/2020/11/slider.png" alt="Third slide"/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={8000}>
                        <img className="d-block w-100" src="http://localhost/wordpress/wp-content/uploads/2020/11/slider.png" alt="Third slide"/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>

                    <section className="product-container">
        <div className="headnew">
            <h4>NEW ON KEYMOJI</h4>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <a href="#"><img src="http://localhost/wordpress/wp-content/uploads/2020/11/WhatsApp-Image-2020-09-19-at-5.13.03-PM.jpeg" alt="Product image"/></a>
                    <div className="favorit-items">
                        <i className="ti ti-heart"></i>
                    </div>
                </div>
            </div>                
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <img src="http://localhost/wordpress/wp-content/uploads/2020/11/Avengers-3D-Gel-Sticker-scaled-1-300x300-1.jpg" alt="Product image"/>
                    <div className="favorit-items">
                        <i className="ti ti-heart"></i>
                    </div>
                </div>
            </div>                
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <img src="http://localhost/wordpress/wp-content/uploads/2020/11/WhatsApp-Image-2020-09-19-at-5.15.01-PM.jpeg" alt="Product image"/>
                    <div className="favorit-items">
                        <i className="ti ti-heart"></i>
                    </div>
                </div>
            </div>                
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card text-center card-product">
                <div className="card-product__img">
                    <img src="http://localhost/wordpress/wp-content/uploads/2020/11/product-1.jpg" alt="Product image"/>
                    <div className="favorit-items">
                        <i className="ti ti-heart"></i>
                    </div>
                </div>
            </div>                
        </div>
        <div className="creadible">
        <img src="http://localhost/wordpress/wp-content/uploads/2020/11/credible-information.png" alt="Creadible image"/>
        </div>
    </section>
                </div>

    );
}
export default HomePage;