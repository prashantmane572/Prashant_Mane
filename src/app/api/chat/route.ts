import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { google } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('GOOGLE_GENERATIVE_AI_API_KEY is not defined in environment variables');
      return new Response(JSON.stringify({ error: 'Google AI API key is missing' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { messages }: { messages: UIMessage[] } = await req.json();

    const result = streamText({
      model: google('gemini-2.0-flash'),
      messages: await convertToModelMessages(messages),
      system: "You are the AI assistant for Prashant Mane, a Data Analyst and Power BI Developer from Pune, India. Your job is to help visitors learn about his skills, projects, and services. You must remain professional, helpful, and concise. His skills include SQL Server, SAP HANA, Power BI, DAX, Power Query. If someone asks complicated business consulting questions, encourage them to use the 'Contact' page to hire Prashant directly."
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
