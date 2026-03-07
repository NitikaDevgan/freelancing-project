import { useState } from "react";
import axios from "axios";

const Contact = () => {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:5000/api/contact", formData);
    setSuccess("Message sent successfully!");
  } catch (error) {
    console.log(error);
  }
};

return (
  <div className="py-20 bg-[#111] text-white text-center">
    <h2 className="text-4xl font-bold mb-10">
      Contact <span className="text-orange-500">Us</span>
    </h2>

    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="p-3 rounded bg-[#1a1a1a]"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="p-3 rounded bg-[#1a1a1a]"
      />
      <input
        type="number"
        name="phone"
        placeholder="Your Phone Number"
        onChange={handleChange}
        className="p-3 rounded bg-[#1a1a1a]"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        className="p-3 rounded bg-[#1a1a1a]"
      />

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 p-3 rounded"
      >
        Send Message
      </button>
    </form>
  </div>
);

};

export default Contact;
