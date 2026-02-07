import { account } from "./config";
import { ID } from "appwrite";

export const authService = {

    createAccount: async (email, password, name) => {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name);
            if (userAccount) {
            
                return await account.createEmailPasswordSession(email, password);
            }
            return userAccount;
        } catch (error) {
            console.error("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    },


    login: async (email, password) => {
        try {
            return await account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error);
            throw error;
        }
    },

    getCurrentUser: async () => {
        try {
            return await account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: No active session");
        }
        return null;
    },

    logout: async () => {
        try {
            await account.deleteSession('current');
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error);
        }
    }
};