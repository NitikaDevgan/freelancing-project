import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {

    console.log(req.body);

    const contact = new Contact(req.body);
    await contact.save();

    res.status(201).json({ message: "Message saved successfully" });

  } catch (error) {

    console.error(error); // important

    res.status(500).json({
      error: error.message
    });
  }
});


export default router;
