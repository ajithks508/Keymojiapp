import Layout from '../components/single/Layout';
import Singleproduct from '../components/single/Singleproduct';
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import SINGLE_PRODUCTS from "../queries/sinproduct";
const singlepro = withRouter( props => {

	const { products } = props;

	return (
		<Layout>
			<div className="content-wrap">
				<Singleproduct key={ products.id } products={ products }/>
			</div>
			<section className="product-containerhome">
                <div className="headnew">
                    <h4>RELATED PRODUCTS</h4>
                </div>
            </section>
		</Layout>
	)
});

singlepro.getInitialProps = async function( context ) {

	let { query: { slug } } = context;

	const id = slug ? slug.split( '-' ).pop() : context.query.id;

	const res = await client.query(({
		query: SINGLE_PRODUCTS,
		variables: { id }
	}));

	return {
		products: res.data.product
	}

};

export default singlepro;
