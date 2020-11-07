import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
const Gallery = (prop) =>{
    const { mediaItem } = prop;
    return(
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <a><Image src={mediaItem.image.sourceUrl} thumbnail /></a>  
        </div>
                
    );
}
export default Gallery;