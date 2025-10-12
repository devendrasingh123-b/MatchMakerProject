import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const [form, setForm] = useState({});
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (currentUser) {
      setForm(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/profile/update/${currentUser._id}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Profile Updated ✅");

      // update frontend storage
      localStorage.setItem("currentUser", JSON.stringify(res.data));

      window.location.href = "/profile"; // redirect to profile page
    } catch (err) {
      console.error(err);
      alert("Error updating profile ❌");
    }
  };


//  👇 Navigate to Signup Page 
  


  return (
    <div className="form-page">
 


      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name || ""}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={form.gender || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city || ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bio"
          placeholder="Bio"
          value={form.bio || ""}
          onChange={handleChange}
        />   
        <button type="submit" className="btn primary">Save Changes</button>
             <button onClick={()=>{
window.location.href = "/profile";
 }} className="btn primary" > Back</button>
      </form>

  
    </div>
  );
}
