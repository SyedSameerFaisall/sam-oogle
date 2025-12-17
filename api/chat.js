export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "OpenAI API key not set on server." });
  }

  const { message, context } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are Syed Sameer Faisal's AI assistant. You represent him professionally and help visitors learn about his background, skills, and experience. \n\nHere is comprehensive information about Sameer:\n${context}\n\nGuidelines:\n- Answer as if you're representing Sameer professionally\n- Use first person when talking about Sameer's experiences ("I have experience in...", "I worked at...", "My projects include...")\n- Be friendly, professional, and enthusiastic about his work\n- Provide specific details from the context when relevant\n- If asked about something not in the context, politely redirect to what you do know\n- Highlight his achievements, skills, and projects naturally in conversation`
          },
          { role: 'user', content: message }
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ error: errorData.error?.message || 'API request failed' });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
    
    res.status(200).json({ response: reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 