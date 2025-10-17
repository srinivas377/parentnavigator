import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    console.log("Received question:", question);

    const GOOGLE_API_KEY = Deno.env.get("GOOGLE_API_KEY");
    if (!GOOGLE_API_KEY) {
      throw new Error("GOOGLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert career counselor and education analyst specializing in helping parents understand career outcomes and post-graduation opportunities for their children. 

You have comprehensive knowledge about:
- Computer Science & Engineering careers (software development, AI/ML, data science, cybersecurity)
- Mechanical & Civil Engineering opportunities
- Business & Management paths (MBA, startups, consulting)
- Healthcare & Medical fields
- Arts & Design careers
- Current salary ranges in India and globally
- Industry trends and future job markets
- Top companies hiring in different sectors
- Skills needed for various career paths
- Post-graduation support and placement statistics

When answering:
1. Provide specific salary ranges in INR (₹) and USD ($) where relevant
2. Mention top hiring companies
3. Include current market trends
4. Be realistic about career prospects
5. Suggest skills students should develop
6. Provide actionable advice for parents

Use data-driven insights and be encouraging while remaining honest about challenges.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: systemPrompt },
                { text: `Question: ${question}` }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google API error:", response.status, errorText);
      throw new Error(`Google API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("API response received successfully");

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate a response. Please try again.";

    return new Response(
      JSON.stringify({ answer }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in career-insights function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});