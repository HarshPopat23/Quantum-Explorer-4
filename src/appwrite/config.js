import { Client, Account, Databases, Storage } from 'appwrite';

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) 
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// This is the secret for local dev CORS stability
// It tells the SDK to trust the local connection more explicitly
// client.setSelfSigned(true); // Uncomment this only if the error persists

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export const conf = {
    dbId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default client;