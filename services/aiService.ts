
import type { UserProfile, Answers, AiResults } from '../types';
import { API_PROVIDERS } from '../constants';

const GROK_PROVIDER = API_PROVIDERS.find(p => p.model === "nvidia/nemotron-nano-9b-v2:free");
const GPT_PROVIDER = API_PROVIDERS.find(p => p.model === "x-ai/grok-4-fast:free");

function formatAnswersForPrompt(answers: Answers): string {
    return Object.values(answers).map(answer => 
        `Question: "${answer.questionText}"\nSelected Answers: ${answer.selectedOptions.join(', ')}`
    ).join('\n\n');
}

export const getCareerAdvice = async (profile: UserProfile, answers: Answers): Promise<AiResults> => {
    if (!GROK_PROVIDER || !GPT_PROVIDER) {
        throw new Error("API provider configuration is missing.");
    }
    
    const formattedAnswers = formatAnswersForPrompt(answers);
    const initialPrompt = `
        User Profile:
        - Name: ${profile.name}
        - Age: ${profile.age}
        - Nationality: ${profile.nationality}
        - Family Income: ${profile.familyIncome}

        Quiz Responses:
        ${formattedAnswers}

        Based on this information, act as an expert career counselor for a high school student. Provide a thoughtful and encouraging analysis of their strengths, interests, and potential career paths. Suggest both traditional and unconventional careers that align with their responses. Your output should be a detailed, free-form text analysis. Do not worry about formatting, just provide insightful ideas.
    `;

    // Step 1: Call Grok for initial analysis
    const grokResponse = await fetch(GROK_PROVIDER.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROK_PROVIDER.apiKey}`,
        },
        body: JSON.stringify({
            model: GROK_PROVIDER.model,
            messages: [
                { role: 'system', content: 'You are an expert career counselor for high school students. Your goal is to provide creative and insightful career ideas based on user data.' },
                { role: 'user', content: initialPrompt }
            ]
        })
    });

    if (!grokResponse.ok) {
        throw new Error(`Failed to get initial analysis from Grok. Status: ${grokResponse.status}`);
    }

    const grokData = await grokResponse.json();
    const grokOutput = grokData.choices[0].message.content;

    // Step 2: Call GPT-3.5 to refine and structure the output
    const refinementPrompt = `
        Raw Career Analysis:
        ---
        ${grokOutput}
        ---

        Your task is to refine this raw analysis into a structured, actionable format for the high school student. Transform it into a clean JSON object.
        The JSON object must follow this exact schema: 
        { 
          "summary": "string", 
          "careerSuggestions": [ { "title": "string", "description": "string", "alignment": "string explaining why it fits the user" } ], 
          "courseRecommendations": [ { "courseName": "string", "platform": "string (e.g., Coursera, Udemy, edX)", "link": "string (a valid URL)" } ] 
        }
        
        - The 'summary' should be a brief, encouraging paragraph for the student.
        - The 'alignment' in 'careerSuggestions' should directly reference the user's quiz answers where possible.
        - For 'courseRecommendations', find 3-5 real, relevant online courses and provide their direct links. Ensure the links are valid URLs.
        - Do not include any text or markdown formatting outside of the main JSON object. The entire response should be only the JSON.
    `;

    const gptResponse = await fetch(GPT_PROVIDER.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GPT_PROVIDER.apiKey}`,
        },
        body: JSON.stringify({
            model: GPT_PROVIDER.model,
            messages: [
                { role: 'system', content: 'You are an AI assistant that refines career advice into a structured JSON format.' },
                { role: 'user', content: refinementPrompt }
            ],
            response_format: { "type": "json_object" }
        })
    });

    if (!gptResponse.ok) {
        throw new Error(`Failed to refine advice with GPT-3.5. Status: ${gptResponse.status}`);
    }

    const gptData = await gptResponse.json();
    const finalJson = JSON.parse(gptData.choices[0].message.content);
    
    return finalJson as AiResults;
};
   
