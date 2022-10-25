import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { setupStore } from 'src/store';
import 'styles/globals.css';
import 'styles/reset.css';
import 'styles/variables.css';
import { Layout } from 'src/components/Layout/Layout';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
