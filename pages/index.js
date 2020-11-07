import Layout from "../components/home/Layout";
import Category from "../components/home/Category";
import client from "../components/ApolloClient";
import gql from 'graphql-tag';
import CATEGORY_LIST from "../queries/categorieslist";

const Index = (props) => {
	console.warn( props );
	const { category } = props;
	return( 
		<Layout>
			<div className="product-container">
				{ category.length ? (
					category.map( cat => <Category key={ cat.id } cat={ cat }/> )
						) : '' }
			</div>
		</Layout>
		)
	};
	Index.getInitialProps = async () => {

		const result = await client.query( {
			query: CATEGORY_LIST,
		} );
	
		return {
			category: result.data.productCategories.nodes,
		}
	
	};
export default Index;