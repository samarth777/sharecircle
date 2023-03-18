import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';


function Donation() {
  return (
    <div>
      <Head>
        <title>ShareCircle | Donate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Donate</h1>
        <form>
          <label htmlFor="item">Item:</label>
          <input type="text" id="item" name="item" required />
          
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" required />
          
          <label htmlFor="pickup">Pickup/Dropoff:</label>
          <select id="pickup" name="pickup">
            <option value="pickup">Pickup</option>
            <option value="dropoff">Dropoff</option>
          </select>

          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
          
          <button type="submit">Donate</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Donation;
