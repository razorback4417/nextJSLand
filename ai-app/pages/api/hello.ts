// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from '@/utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "What is 2+2",
  });
  const responseText = completion.data.choices[0].text;
  res.status(200).json({responseText})
  //receieve some user data, ask ChatGPT to generate something and return to the user

}
