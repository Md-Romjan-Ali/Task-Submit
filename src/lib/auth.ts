import { setServers } from "node:dns";
setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth, string } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_CLIENT_URI as string);
const db = client.db('task-submit');

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: 'user',
            },
            resetCode: {
                type: "number",
                defaultValue: null
            },
            resetCodeExpires: {
                type: "number",
                defaultValue: null
            }
        },
    }
});