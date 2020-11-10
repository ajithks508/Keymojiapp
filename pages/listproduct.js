import Layout from "../components/catbyproduct/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
import PRODUCTS_LIST from "../queries/productlist";
import Productlistbycat from "../components/catbyproduct/Productlistbycat";

const listproduct = withRouter( props => {

	const { categoryName, products } = props;

	return (
		<Layout>
			<div className="content-wrap">
				{ categoryName ? <h3 className="product-container pl-5">{ categoryName }</h3> : '' }
				<div className="product-container row">
					{ undefined !== products && products.length ? (
						products.map( lst => <Productlistbycat key={ lst.id } lst={ lst } /> )
					) : ''}
				</div>
			</div>
		</Layout>
	)
});

listproduct.getInitialProps = async function( context ) {

	let { query: { slug } } = context;

	const id = slug ? slug.split( '-' ).pop() : context.query.id;

	const res = await client.query(({
		query: PRODUCTS_LIST,
		variables: { id }
	}));

	return {
		categoryName: res.data.productCategory.name,
		products: res.data.productCategory.products.nodes
	}

};

export default listproduct;
