import OpenAI from "openai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (error) {
      res.status(400).json({ error: "Invalid JSON body" });
      return;
    }
  }

  const { messages } = body || {};
  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: "Invalid messages format" });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "GROQ_API_KEY is not set" });
    return;
  }

  const model = process.env.GROQ_MODEL || "llama-3.1-8b-instant";

  try {
    const openai = new OpenAI({
      apiKey,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const completion = await openai.chat.completions.create({
      model,
      messages,
    });

    const responseText = completion.choices[0]?.message?.content || "";
    res.status(200).json({ message: responseText });
  } catch (error) {
    console.error("Chat API error:", error);
    res.status(500).json({ error: "Failed to process chat request" });
  }
}
