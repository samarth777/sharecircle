import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

function Resources() {
  return (
    <div>
      <Head>
        <title>ShareCircle | Resources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1>Resources</h1>
        <ul>
          <li>Food banks in your area</li>
          <li>Shelters in your area</li>
          <li>Community centers with support services</li>
          <li>Job training programs in your area</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default Resources;
