import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import Header from "@/components/header";
import Footer from "@/components/footer";

function Resource() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const donationRef = collection(db, "organisations");
      const data = await getDocs(donationRef);
      const dataArray = data.docs.map((doc) => doc.data());
      setDonations(dataArray);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Organisations</h1>
      <div class="donations">
        {donations.map((donation, index) => (
          <div class="donation-card" key={index}>
            <p class="name">Name: {donation.name}</p>
            <p class="category">Category: {donation.category}</p>
            <p class="description">Description: {donation.description}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Resource;