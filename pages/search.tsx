import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

function Search() {
  return (
    <div>
      <Head>
        <title>ShareCircle | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <h1>Search for Organizations</h1>
        <form>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
          
          <label htmlFor="category">Category:</label>
          <select id="category" name="category">
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="housing">Housing</option>
            <option value="employment">Employment</option>
          </select>

          <button type="submit">Search</button>
        </form>
        <p>Results will be displayed here.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
