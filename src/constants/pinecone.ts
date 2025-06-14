import { Pinecone } from '@pinecone-database/pinecone';
import { ENV } from './env';

export const pinecone = new Pinecone({
  apiKey: ENV.PINECONE_API_KEY,
  maxRetries: 5,
});

export const createPineconeIndexAndCollection = async () => {
  await pinecone.createCollection({
    name: 'mini_dev_collection',
    source: 'minideveloper',
  });

  await pinecone.createIndex({
    name: 'mini_dev_index',
    dimension: 512,
    metric: 'cosine',
    spec: {
      serverless: {
        cloud: 'aws',
        region: 'us-east-1',
      },
    },
  });

  await pinecone.describeIndex('mini_dev_index');
};
