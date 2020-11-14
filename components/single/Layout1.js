import '../../styles/Style.css';
import Footer from '../Footer';
import Footerdata from '../Footerdata';
const Layout1 = (probnp) => {
    return(
        <div>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            <section className="product-cont">
                <div className="headrel">
                    <label>RELATED PRODUCTS</label>
                </div>
            </section>
            {probnp.children}
            <Footerdata/>
            <Footer/>
        </div>
    );
}
export default Layout1;