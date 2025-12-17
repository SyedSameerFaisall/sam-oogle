import { Plugin } from 'vite';
import { loadEnv } from 'vite';

export function apiPlugin(): Plugin {
  return {
    name: 'api-plugin',
    configureServer(server) {
      const env = loadEnv('development', process.cwd(), '');
      
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/chat' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          
          req.on('end', async () => {
            try {
              const { message, context } = JSON.parse(body);
              const apiKey = env.OPENAI_API_KEY;

              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'OpenAI API key not set' }));
                return;
              }

              const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${apiKey}`,
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

              const data = await response.json();
              const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ response: reply }));
            } catch (error) {
              console.error('API Error:', error);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Internal server error' }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}
