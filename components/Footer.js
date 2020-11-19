import StickyFooter from 'react-sticky-footer';
import Carticon from './carticon/Carticon';
const Footer = () =>{
    return(
        <StickyFooter bottomThreshold={50} normalStyles={{backgroundColor: "#d0d3d4",padding: "2rem",align:"centers"}}
        stickyStyles={{backgroundColor: "rgba(255,255,255,.8)",padding: "2rem",width:"100%"}}>
                <div className="row" style={{textAlign:'center'}}>
                        <a href="/Shop" className="colf"><i className="ti ti-layout-grid2"></i><br/>
                        <i style={{fontSize:"10px",color:"black"}}>Shop</i></a>
                        <a href="/Shop" className="colf"><i className="ti ti-heart"></i><br/>
                        <i style={{fontSize:"10px",color:"black"}}>Wishlist</i></a>
                        <a href="/Shop" className="colf"><i className="ti ti-user"></i><br/>
                        <i style={{fontSize:"10px",color:"black"}}>Account</i></a>
                        <a href="/Shop" className="colf"><Carticon/></a>
                    </div>
        </StickyFooter>
    );
}
export default Footer;