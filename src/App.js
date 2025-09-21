import { useState } from "react";

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your name" 
          value={form.name} 
          onChange={handleChange} 
        />
        <br /><br />
        <input 
          type="email" 
          name="email" 
          placeholder="Your email" 
          value={form.email} 
          onChange={handleChange} 
        />
        <br /><br />
        <textarea 
          name="message" 
          placeholder="Your message" 
          value={form.message} 
          onChange={handleChange} 
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>Live Preview</h2>
      <p><b>Name:</b> {form.name}</p>
      <p><b>Email:</b> {form.email}</p>
      <p><b>Message:</b> {form.message}</p>
    </div>
  );
}

export default App;
