import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.tavasya.aora',
    projectId: '679dcb690008d6c3dfdc',
    databaseId: '679ea2540021df5b6ee5',
    userCollectionId: '679ea27a000085f88e8f',
    videoCollectionId: '679ea2a4001af42edc43',
    storageId: '679ea871000eaa972397'
};

const client = new Client();
client
  .setEndpoint(config.endpoint) // Your Appwrite endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your platform name

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw new Error('Account creation failed');

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};

export const signIn = async (email, password) => {
    try {
        // Check if there is an existing session
        const sessions = await account.listSessions();
        if (sessions.total > 0) {
            // If there is an existing session, return it
            return sessions.sessions[0];
        }

        // If no existing session, create a new one
        const session = await account.createEmailSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw new Error('No current account');

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        );

        if (!currentUser) throw new Error('No current user');

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};


