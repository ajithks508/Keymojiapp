import Layout from "../components/shop/Layout";
import Product from "../components/shop/Product";
import client from "../components/ApolloClient";
import CATEGORY_LIST from "../queries/categorieslist";


const Shop = ( propsh ) => {
	const { category } = propsh;
	return( 
		<Layout>
            <div className="product-container">
				{ category.length ? (
					category.map( cat => <Product key={ cat.id } cat={ cat }/> )
						) : '' }
			</div>
        </Layout>
		)
	};
	Shop.getInitialProps = async () => {

		const result = await client.query( {
			query: CATEGORY_LIST,
		} );
	
		return {
			category: result.data.productCategories.nodes,
		}
	
	};
	
	export default Shop;