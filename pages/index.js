import Layout from "../components/home/Layout";
import Layout1 from "../components/home/Layout1";
import Category from "../components/home/Category";
import client from "../components/ApolloClient";
import CATEGORY_LIST from "../queries/categorieslist";
import PRODUCTS_NEW from "../queries/newpro";
import Newproducts from "../components/home/Newproducts";

const index = (props) => {
	console.warn( props );
	const { category,products } = props;
	return( 
		<div>
		<Layout>
			<div className="product-container">
				{ category.length ? (
					category.map( cat => <Category key={ cat.id } cat={ cat }/> )
						) : '' }
			</div>
		</Layout>
		<Layout1>
			<div className="product-container">
				{ products.length ? (
					products.map( pro => <Newproducts key={ pro.id } pro={ pro }/> )
						) : '' }
			</div>
		</Layout1>
		</div>
		)
	};
	index.getInitialProps = async () => {

		const result = await client.query( {
			query: CATEGORY_LIST,
		} );
		const res = await client.query( {
			query: PRODUCTS_NEW,
		} );
	
		return {
			category: result.data.productCategories.nodes,
			products : res.data.products.nodes
		}
	
	};
export default index;