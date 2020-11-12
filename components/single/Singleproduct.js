import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const Singleproduct = (propl) =>{
    const { products } = propl;
    return(
        <div className="row">
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={products.image.sourceUrl} />
                    <div className="App">
                        <Carousel breakPoints={breakPoints}>
                        <Item>
                            <Card.Img src={products.galleryImages.nodes.sourceUrl} />
                        </Item>
                        </Carousel>
                    </div>
                </Card>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="product-details">
                    <div className="pd-title">
                        <span>Himalayan</span>
                            <h3>{products.name}</h3>
                        <a href="#" className="heart-icon"><i class="icon_heart_alt"></i></a>
                    </div>
                    <div className="pd-rating">
                        <i className="ti ti-star"></i>
                        <i className="ti ti-star"></i>
                        <i className="ti ti-star"></i>
                        <i className="ti ti-star"></i>
                        <i className="ti ti-star"></i>
                        <span>(5)</span>
                    </div>
                    <div className="pd-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur ing elit, sed do eiusmod tempor sum dolor
                            sit amet, consectetur adipisicing elit, sed do mod tempor</p>
                            <p className="product__price"><span className="cross"><del>{ products.regularPrice ? products.regularPrice : '' }
                </del></span>&nbsp;&nbsp;{ products.salePrice ? products.salePrice : '' }</p>
                    </div>
                    <div className="sinbutton">
                        <div className="dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                                Select Varient
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                        <Button variant="outline-danger" size="lg" block>
                            ADD TO CART
                        </Button>
                    </div>
                    <div className="pd-share">
                        <div className="p-code">Sku : 00012</div>
                            <div className="pd-social">
                                <a href="#" className="socialicon"><i className="ti ti-facebook"></i></a>
                                <a href="#" className="socialicon"><i className="ti ti-twitter-alt"></i></a>
                                <a href="#" className="socialicon"><i className="ti ti-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
    );
}
export default Singleproduct;