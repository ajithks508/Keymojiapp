import '../../styles/Style.css';
import Footer from '../Footer';
import Footerdata from '../Footerdata';
const Layout1 = (probnw) => {
    return(
        <div>
            <title>Home</title>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            {probnw.children}
            <Footerdata/>
            <div className="hidden-lg">
                <Footer/>
            </div>
        </div>
    );
}
export default Layout1;