import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'next-auth/client';
import '../styles/index.css'

const App = ({ Component, pageProps }: AppProps) => {
    const { session } = pageProps;
    return (
        <>
            <Provider session={session}>
            <div className="flex flex-col h-screen bg-gray-900 text-white">
                <Component {...pageProps} />
            </div>
            </Provider>
        </>
    );
}

export default App;