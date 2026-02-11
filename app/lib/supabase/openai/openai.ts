import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

const openai = createOpenAI({
  // custom settings, e.g.
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
    project: 'practicepro-ai',
});

const { text } = await generateText({
  model: openai('gpt-5'),
  prompt: 'Write a vegetarian lasagna recipe for 4 people.',
});