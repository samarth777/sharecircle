import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import Header from "@/components/header";
import Footer from "@/components/footer";

function Resource() {
  const [donations, setDonations] = useState<never[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const donationRef = collection(db, "donations");
      const data = await getDocs(donationRef);
      const dataArray = data.docs.map((doc) => doc.data());
      setDonations(dataArray);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Resources</h1>
      <div class="donations">
        {donations.map((donation, index) => (
          <div class="donation-card" key={index}>
            <p class="name">Name: {donation.name}</p>
            <p class="email">Email: {donation.email}</p>
            <p class="item">Item: {donation.item}</p>
            <p class="category">Category: {donation.category}</p>
            <p class="quantity">Quantity: {donation.quantity}</p>
            <p class="location">Location: {donation.location}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Resource;
