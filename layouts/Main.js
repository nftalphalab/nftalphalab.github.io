import Head from 'next/head';
import Header from '../components/Header';
import { useRouter } from 'next/router';

export default ({ children, title = 'NFT Alpha Labs' }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="app-main">
      <Head>
        <title>{ title }</title>
      </Head>

      <Header />

      <main className={(pathname !== '/' ? 'main-page' : '')}>
        { children }
      </main>
    </div>
  )
}