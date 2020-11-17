import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import AddtoCartButton from '.././carticon/AddtoCartButton';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
function handleAdd(e) {
    var img1 = document.getElementById('img1');
    img1.src = e.target.src;
  }
const Singleproduct = (propl) =>{
    const { products } = propl;
    return(
        <div className="row">
                <div className="col-xl-2 col-lg-2"></div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="row">
                        <Card style={{ width: '100%'}}>
                            <Card.Img variant="top" src={products.image.sourceUrl} id="img1"/>
                        </Card>
                    </div>
                    <div className="row">
                        <div className="App">
                            <Carousel breakPoints={breakPoints}>
                            {products. galleryImages.nodes.map(name => (
                                <Item style={{ height: '10rem', width: '12rem'}}>
                                    <Image src={name.sourceUrl}  onClick={handleAdd}/>
                                </Item>
                            ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="product-details">
                    <div className="pd-title">
                        <span>Himalayan</span>
                            <h3>{products.name}</h3>
                        <a href="#" className="heart-icon"><i className="icon_heart_alt"></i></a>
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
                            <div className="sinbutton">
                                <input type="file" className="fileadd"/>
                            </div>
                            <div className="sinbutton">
                                <Form.Control type="text" placeholder="Vehicle Brand /Model" />
                            </div>
                            <div className="sinbutton">
                                <Form.Control type="text" placeholder="Register Number" />
                            </div>
                            <AddtoCartButton products={products}/>
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