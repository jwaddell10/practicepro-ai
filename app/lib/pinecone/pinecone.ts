import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY || '',
});
const index = pc.index('quickstart');

// To get the unique host for an index, 
// see https://docs.pinecone.io/guides/manage-data/target-an-index
const namespace = pc.index("practicepro-ai", "https://practicepro-ai-zbow31e.svc.aped-4627-b74a.pinecone.io").namespace("practicepro-ai");

const response = await namespace.searchRecords({
  query: {
    topK: 2,
    inputs: { text: 'Disease prevention' },
  },
  fields: ['chunk_text', 'category'],
});

console.log(response);