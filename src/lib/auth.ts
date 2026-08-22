import { setServers } from "node:dns";
setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
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
        // sendResetPassword: async ({ user, url }) => {
        //     await sendAuthEmail({
        //         recipient: user.email,
        //         subject: "Reset your ProgramHero password",
        //         title: "Reset your password",
        //         message: "Use the link below to choose a new password. This link will expire soon.",
        //         url,
        //     });
        // },
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: false,
        // sendVerificationEmail: async ({ user, url }) => {
        //     await sendAuthEmail({
        //         recipient: user.email,
        //         subject: "Verify your ProgramHero email",
        //         title: "Verify your email",
        //         message: "Please verify your email address before signing in to ProgramHero.",
        //         url,
        //     });
        // },
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