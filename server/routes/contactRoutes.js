import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message Sent Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
