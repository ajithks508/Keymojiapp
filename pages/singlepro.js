import Layout from '../components/single/Layout';
import Singleproduct from '../components/single/Singleproduct';
import Relatedproducts from '../components/single/Relatedproducts';
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import SINGLE_PRODUCTS from "../queries/sinproduct";
import PRODUCTS_LIST from "../queries/productlist";
import Layout1 from "../components/single/Layout1";
const singlepro = withRouter( props => {

	const { products,relproduct } = props;

	return (
		<div>
		<Layout>
			<div className="content-wrap">
				<Singleproduct key={ products.id } products={ products }/>
			</div>
		</Layout>
		<Layout1>
			<div className="content-wrap">
				<div className="product-container row">
					{ relproduct.length ? (
							relproduct.map( cat => <Relatedproducts key={ cat.id } cat={ cat }/> )
								) : '' }
				</div>
			</div>
		</Layout1>
		</div>
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
		products: res.data.product,
		relproduct:res.data.product.productCategories.nodes[0].products.nodes
	}

};

export default singlepro;
