import '../../styles/Style.css';
import Footer from '../Footer';
import Footerdata from '../Footerdata';
import Navdata from '../Navdata';
const Layout =(probt)=>{
    return(
        <div>
            <title>Product</title>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            <Navdata/>
            {probt.children}
            <Footerdata/>
            <Footer/>
        </div>
    );

}
export default Layout;