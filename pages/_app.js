import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nikita Bhilare | QA Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Nikita Bhilare, a Junior QA Trainee specializing in web and mobile testing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300 relative">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
