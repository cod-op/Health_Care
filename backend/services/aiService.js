import gemini from "../config/gemini.js";

export const analyzeSupportRequest = async ({
  name,
  supportType,
  message
}) => {

  const prompt = `
You are assisting a healthcare NGO.

Your job is to summarize a support request for NGO staff.

User name:
${name}

Support type:
${supportType}

Request:
${message}

Return only valid JSON in this format:

{
  "summary": "A short 1-2 sentence summary of the request.",
  "priority": "Low",
  "suggestedAction": "A short practical action for NGO staff."
}

Priority guidelines:

Low:
General information or non-urgent community support.

Medium:
A normal support request that needs follow-up.

High:
The request appears time-sensitive or the person may have difficulty
accessing essential support.

Important rules:

- Do not diagnose any medical condition.
- Do not recommend medicines.
- Do not provide treatment instructions.
- Do not provide medical advice.
- Do not invent information.
- Priority refers to support handling priority, not medical severity.
`;

  const response = await gemini.models.generateContent({
    model: "gemini-3.6-flash",

    contents: prompt,

    config: {
      temperature: 0.2,

      responseMimeType: "application/json"
    }
  });

  const content = response.text;

  if (!content) {
    throw new Error("AI returned an empty response");
  }

  return JSON.parse(content);
};