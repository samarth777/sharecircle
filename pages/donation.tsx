import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import Header from "@/components/header";
import Footer from "@/components/footer";

function Donations() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  // const [image, setImage] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const donationRef = collection(db, "donations");
      const newDonation = {
        name: name,
        email: email,
        category: category,
        quantity: quantity,
        item: item,
        location: location,
        // image: image,
      };
      await addDoc(donationRef, newDonation);
      alert("Thank you for your donation!");
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting your donation.");
    }

    // Reset form fields
    setName("");
    setEmail("");
    setItem("");
    setQuantity(1);
    setCategory("");
    setLocation("");
    // setImage("");
  };

  return (
    <div>
      <Header />
      <h1>Make a Donation</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
        />

        <label htmlFor="category">Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="books">Books</option>
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="others">Others</option>          
        </select>
          

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />

        {/* <label htmlFor="image">Image:</label>
        <input
          type="image"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        /> */}

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit">Donate</button>
      </form>
      <Footer />
    </div>
  );
}

export default Donations;