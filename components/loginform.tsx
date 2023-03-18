import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      // Sign in the user with Firebase Authentication
      await firebase.auth().signInWithEmailAndPassword(email, password);
  
      // If the login is successful, redirect the user to the homepage
      window.location.href = '/';
    } catch (error) {
      // If the login fails, display an error message to the user
      alert(error.message);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
