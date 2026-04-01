import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import OpenAI from "openai";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mock MongoDB connection if URI is not provided
const mongoUri = process.env.MONGODB_URI;
if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));
} else {
  console.log("MONGODB_URI not provided. Using in-memory mock database.");
}

  // Define simple schemas
  const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
  });
  const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

  // In-memory fallback
  const mockContacts: any[] = [];

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (mongoUri) {
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
      } else {
        mockContacts.push({ name, email, subject, message, createdAt: new Date() });
      }

      res.status(201).json({ success: true, message: "Message received successfully" });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/project-request", async (req, res) => {
    try {
      const { name, email, projectType, details } = req.body;
      if (!name || !email || !projectType || !details) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // Simulating save
      res.status(201).json({ success: true, message: "Project request received successfully" });
    } catch (error) {
      console.error("Error saving project request:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format" });
      }

      const apiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY || "dummy-key";
      
      if (apiKey === "dummy-key") {
        return res.json({
          message: "This is a mock response because GROQ_API_KEY is not set in the environment. Please add it to your .env file to enable real AI responses."
        });
      }

      const openai = new OpenAI({
        apiKey: apiKey,
        baseURL: "https://api.groq.com/openai/v1",
      });

      const completion = await openai.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: messages,
      });

      const responseText = completion.choices[0]?.message?.content || "I'm not sure how to respond to that.";
      res.json({ message: responseText });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: "Failed to process chat request" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    }).then((vite) => {
      app.use(vite.middlewares);
    }).catch((err) => {
      console.error("Vite server error:", err);
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Only listen if not running in Vercel
  if (!process.env.VERCEL) {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }

export default app;
