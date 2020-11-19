import '../../styles/Style.css';
import Footer from '../Footer';
import Footerdata from '../Footerdata';
import client from "../ApolloClient";
import { AppProvider } from "../context/AppContext";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
const Layout1 = (probrp) => {
    return(
        <AppProvider>
        <ApolloProvider client={ client }>
            <ApolloHooksProvider client={ client }>
        <div>
            <link rel="stylesheet" href="https://unpkg.com/@icon/themify-icons/themify-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
            <section className="product-cont">
                <div className="headrel">
                    <label>RELATED PRODUCTS</label>
                </div>
            </section>
            {probrp.children}
            <Footerdata/>
            <Footer/>
        </div>
         </ApolloHooksProvider>
         </ApolloProvider>
     </AppProvider>
    );
}
export default Layout1;