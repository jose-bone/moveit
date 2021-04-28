import { AppProps } from 'next/app'
import { ThemeProvider } from '../contexts/ThemeContext'

import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
