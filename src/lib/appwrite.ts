import { Client, Account, Databases, Storage } from 'appwrite';

/**
 * Client-side Appwrite configuration
 * This client is safe to use in the browser for public operations
 */

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://nyc.cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Database and Collection IDs (set these in your .env file)
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const COLLECTIONS = {
  SUPPORTER_SIGNUPS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SUPPORTERS || '',
};

export default client;
