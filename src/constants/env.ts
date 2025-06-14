import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 3000,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_MODEL_NAME: process.env.OPENAI_MODEL_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  PINECONE_API_KEY: process.env.PINECONE_API_KEY,
};
