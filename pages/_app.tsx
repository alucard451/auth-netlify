import '../styles/globals.css';
import '../styles/tailwind.css';
import NavBar from '../components/NavBar';

import { AuthContextProvider } from '../stores/authContext';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <AuthContextProvider>
    <NavBar></NavBar>
  <Component {...pageProps} />
  </AuthContextProvider>)

}
