import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { prisma } from './prisma';

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'mysql',
    }),
    emailAndPassword: {
        enabled: true,
        autoSignIn: true,
    },

    user: {
        additionalFields: {
            role: {
                type: 'string',
            },
        },
    },

    callback: {
        async session({ session, user }) {
            session.user.role = user.role;
            return session;
        },
    },

    plugins: [nextCookies()],
});
