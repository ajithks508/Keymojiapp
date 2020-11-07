import '../../styles/Style.css';
import Footer from '../Footer';
import Footerdata from '../Footerdata';
import Header from '../Header';
import Category from './Category';
import HomePage from './HomePage';

const Layout = (probc) => {
    return(
        <div>
            <title>Home</title>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            <Header/>
            <HomePage/>
            <section className="product-containerhome">
                <div className="headnew">
                    <h4>CATEGORIES</h4>
                </div>
            </section>
            { probc.children }
            <Footerdata/>
            <Footer/>
        </div>
    );
}
export default Layout;