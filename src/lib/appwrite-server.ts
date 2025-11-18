import { Client, Databases, Storage, Users } from 'node-appwrite';

/**
 * Server-side Appwrite client configuration
 * This uses the API key and should NEVER be exposed to the client
 */

export function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://nyc.cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
    .setKey(process.env.APPWRITE_API_KEY || '');

  return {
    get account() {
      return new Users(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
}

// Database and Collection IDs
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
export const COLLECTIONS = {
  SUPPORTER_SIGNUPS: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_SUPPORTERS || '',
};
