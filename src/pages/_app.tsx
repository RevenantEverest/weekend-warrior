import type { AppProps } from 'next/app';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../styles/globals.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
