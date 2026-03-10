import { useState } from "react";
import axios from "axios";

const Contact = () => {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
});

const [success, setSuccess] = useState("");

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

    setSuccess("✅ Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

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
        value={formData.name}
        onChange={handleChange}
        className="p-3 rounded bg-white text-black outline-none"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="p-3 rounded bg-white text-black outline-none"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="p-3 rounded bg-white text-black outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="p-3 rounded bg-white text-black outline-none"
      />

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 p-3 rounded font-semibold"
      >
        Send Message
      </button>

      {success && (
        <p className="text-green-400 mt-4 font-semibold">
          {success}
        </p>
      )}

    </form>
  </div>
);

};

export default Contact;
