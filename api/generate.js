const natural = require('natural');

export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key, x-provider');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = req.headers['x-api-key'];
  const provider = req.headers['x-provider'] || 'openai'; // Default to OpenAI

  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  try {
    let response;
    let data;

    // Natural Language Processing - Sentiment Analysis
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");

    // Extract text to analyze from the last user message
    let textToAnalyze = "";
    if (req.body.messages && req.body.messages.length > 0) {
      const lastMessage = req.body.messages[req.body.messages.length - 1];
      if (lastMessage.role === 'user') {
        textToAnalyze = lastMessage.content;
      }
    }

    let sentimentScore = 0;
    if (textToAnalyze) {
      const tokenizer = new natural.WordTokenizer();
      const tokenized = tokenizer.tokenize(textToAnalyze);
      sentimentScore = analyzer.getSentiment(tokenized);
      console.log(`Sentiment Score: ${sentimentScore}`);
    }

    if (provider === 'anthropic') {
      // Anthropic API
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });

      data = await response.json();

      // Inject sentiment into response if possible, or just log it for now.
      if (data) {
        data.sentiment = sentimentScore;
      }

    } else {
      // OpenAI API (default)
      const { model, max_tokens, messages, system } = req.body;

      // Convert Anthropic format to OpenAI format
      const openaiMessages = [];
      if (system) {
        openaiMessages.push({ role: 'system', content: system });
      }
      openaiMessages.push(...messages);

      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: model || 'gpt-4o',
          max_tokens: max_tokens || 4096,
          messages: openaiMessages
        })
      });

      const openaiData = await response.json();

      // Convert OpenAI response to Anthropic-like format for frontend compatibility
      if (openaiData.choices && openaiData.choices[0]) {
        data = {
          content: [{ text: openaiData.choices[0].message.content }],
          sentiment: sentimentScore
        };
      } else {
        data = openaiData; // Pass through errors
      }
    }

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
