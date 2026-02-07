import { storage, conf } from './config';
import { ID } from 'appwrite';

export const fileService = {
    // Upload file to Appwrite Bucket
    uploadFile: async (file) => {
        try {
            return await storage.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    },

    // Delete file
    deleteFile: async (fileId) => {
        try {
            await storage.deleteFile(conf.bucketId, fileId);
            return true;
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    },

    // Get File Preview (For Thumbnails)
    getFilePreview: (fileId) => {
        return storage.getFilePreview(conf.bucketId, fileId);
    }
};