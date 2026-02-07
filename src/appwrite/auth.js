import { account } from "./config";
import { ID } from "appwrite";

export const authService = {
    createAccount: async (email, password, name) => {
        try {
            const userAccount = await account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // Login the user immediately after signup
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
            const user = await account.get();
            if (user) return user;
        } catch (error) {
            // No console log here to keep your terminal clean during "AuthLayout" checks
            return null;
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