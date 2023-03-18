import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

function Home() {
  return (
    <div>
      <Header />
      <Head>
        <title>ShareCircle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Our app connects people with surplus food, clothing, and other resources to people in need.</p>
        <p>Use the navigation bar to access our donation form, organization search page, and resources page.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
