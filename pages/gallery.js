import Layout from "../components/gallery/Layout";
import Gallery from "../components/gallery/Gallery";
import client from "../components/ApolloClient";
import MEDIA_LIST from "../queries/mediaitems";


const gallery = ( props ) => {
	console.warn( props );
	const { mediaItems } = props;
	return( 
		<Layout>
            <div className="product-container">
				{ mediaItems.length ? (
					mediaItems.map( mediaItem => <Gallery key={ mediaItem.id } mediaItem={ mediaItem }/> )
						) : '' }
			</div>
        </Layout>
		)
	};
	gallery.getInitialProps = async () => {

		const result = await client.query( {
			query: MEDIA_LIST,
		} );
	
		return {
			mediaItems: result.data.products.nodes,
		}
	
	};
	
	export default gallery;