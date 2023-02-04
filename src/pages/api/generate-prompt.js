import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { timeframe, signe } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(timeframe, signe),
    temperature: 0.6,
    max_tokens: 512,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
function generatePrompt(timeframe, signe) {
  return `Prétend etre un expert en astrologie et donne moi pour une personne ${timeframe}$ dont le signe astrologique est ${signe}$.`;
}
