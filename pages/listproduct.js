import Layout from "../components/catbyproduct/Layout";
import Productlistbycat from "../components/catbyproduct/Productlistbycat";
import client from "../components/ApolloClient";
import gql from 'graphql-tag';
import CATEGORY_LIST from "../queries/categorieslist";


const listproduct = ( props ) => {
	console.warn( props );
	const { lists } = props;
	return( 
		<Layout>
            <div className="product-container">
				{ lists.length ? (
					lists.map( list => <Productlistbycat key={ list.id } list={ list }/> )
						) : '' }
			</div>
        </Layout>
		)
	};
	listproduct.getInitialProps = async () => {

		const result = await client.query( {
			query: CATEGORY_LIST,
		} );
	
		return {
			lists: result.data.productCategory.products.nodes,
		}
	
	};
	
	export default listproduct;