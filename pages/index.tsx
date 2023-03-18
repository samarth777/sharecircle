import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

function Home() {
  return (
    <div >
      <Header />
      <Head>
        <title>ShareCircle | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1>Welcome to ShareCircle</h1>
      <h2>
        ShareCircle is a platform that connects people with surplus food,
        clothing, and other resources to those in need in their local
        communities.
      </h2>
      <h2>What We Do:</h2>
      <ol>
        <li>
          <h3>Connect Donors with Local Organizations</h3>
          <p>
            Our user-friendly app makes it easy for donors to identify local
            organizations that are in need of their surplus resources. Donors
            can easily schedule pickups or drop-offs for their donations and
            track the status of their donations through the app.
          </p>
        </li>
        <li>
          <h3>Search for Support Services</h3>
          <p>
            Our app provides a search feature that allows users to find local
            organizations that offer support services, such as food banks,
            housing assistance, and job training programs. Users can access
            resources and information on how to access services and support in
            their community.
          </p>
        </li>
        <li>
          <h3>Promote Sustainability and Equality</h3>
          <p>
            By leveraging the power of technology, ShareCircle promotes
            sustainability and equality by reducing waste, increasing access to
            basic necessities, and fostering community engagement. Our app
            provides an easy and convenient way to donate resources to local
            organizations that serve people in need, thereby creating a more
            sustainable and equitable world for all.
          </p>
        </li>
      </ol>
      <h2>
        Join us in our mission to build stronger, more connected communities by
        sharing your resources with those in need through ShareCircle.
      </h2>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
