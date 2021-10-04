import Layout from '../components/layout';
import '../styles/global_styles.css';

function MyApp({ Component, pageProps }) {
   
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  );
}

export default MyApp
