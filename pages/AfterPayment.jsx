import React, { useState } from 'react';
import './AfterPayment.css';  // Ensure filename matches exactly

function SubmitOrder({ cartItems }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [landmark, setLandmark] = useState('');
  const [billFile, setBillFile] = useState(null);
  const [screenshotFile, setScreenshotFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!billFile || !screenshotFile) {
      alert("Please upload both bill and screenshot.");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('place', place);
    formData.append('landmark', landmark);
    formData.append('bill', billFile);
    formData.append('screenshot', screenshotFile);

    try {
      const res = await fetch('http://localhost:5000/api/order-upload', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = data.whatsappURL;
      } else {
        alert('Upload failed. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting order.');
    }
  };

  return (
    <div className="after-payment-container">
      <h2>Submit Your Order</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Phone Number</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Place</label>
        <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} required />

        <label>Landmark</label>
        <input type="text" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />

        <label>Upload PDF Bill</label>
        <input type="file" accept="application/pdf" onChange={(e) => setBillFile(e.target.files[0])} required />

        <label>Upload Payment Screenshot</label>
        <input type="file" accept="image/*" onChange={(e) => setScreenshotFile(e.target.files[0])} required />

        <button type="submit">Submit Order to WhatsApp</button>
      </form>
    </div>
  );
}

export default SubmitOrder;
