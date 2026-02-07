import { databases, storage, conf } from "./config";
import { ID, Query } from "appwrite";

export const dbService = {
    uploadMaterial: async (file, { title, type, subject }) => {
        try {
            const uploadedFile = await storage.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );

            if (uploadedFile) {
                return await databases.createDocument(
                    conf.dbId,
                    conf.collectionId,
                    ID.unique(),
                    {
                        title,
                        type,
                        subject,
                        fileId: uploadedFile.$id,
                    }
                );
            }
        } catch (error) {
            console.error("Appwrite service :: uploadMaterial :: error", error);
            throw error;
        }
    },

    getMaterials: async () => {
        try {
            return await databases.listDocuments(
                conf.dbId, 
                conf.collectionId,
                [Query.orderDesc("$createdAt")]
            );
        } catch (error) {
            console.error("Appwrite service :: getMaterials :: error", error);
            return false;
        }
    },

    getFileView: (fileId) => {
        return storage.getFileView(conf.bucketId, fileId);
    }
};