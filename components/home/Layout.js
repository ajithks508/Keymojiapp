import '../../styles/Style.css';
import Header from '../Header';
import HomePage from './HomePage';
import Image from 'react-bootstrap/Image';
import client from "../ApolloClient";
import { AppProvider } from "../context/AppContext";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

const Layout = (probca) => {
    return(
        <AppProvider>
			<ApolloProvider client={ client }>
				<ApolloHooksProvider client={ client }>
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
                        { probca.children }
                        <div>
                            <Image src="http://localhost/wordpress/wp-content/uploads/2020/11/slider-short.png" width="100%" fluid />
                        </div>
                        <section className="product-containerhome">
                            <div className="headnew">
                                <h4>NEW ON KEYMOJI</h4>
                            </div>
                        </section>
                    </div>
                    </ApolloHooksProvider>
			</ApolloProvider>
		</AppProvider>
    );
}
export default Layout;