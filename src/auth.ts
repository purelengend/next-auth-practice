import NextAuth, { Session } from 'next-auth';
import { ROUTER } from './constants';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { SignInFormData } from './types';
import { User } from './types/user';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User;
  }
}
const isAuthorized = (auth: Session | null, nextUrl: URL) => {
  const isLoggedIn = !!auth?.user;

  const isSignInPage = nextUrl.pathname.startsWith(ROUTER.SIGN_IN);

  if (isLoggedIn && isSignInPage) {
    return Response.redirect(new URL(ROUTER.HOME, nextUrl));
  }

  if (!isLoggedIn && !isSignInPage) {
    return Response.redirect(new URL(ROUTER.SIGN_IN, nextUrl));
  }

  return true;
};

async function getUser({
  username,
  password,
}: Omit<SignInFormData, 'remember'>) {
  try {
    const data = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const user = await data.json();
    return user;
  } catch (_) {
    return null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: ROUTER.SIGN_IN,
  },
  trustHost: true,
  callbacks: {
    async jwt({ user, token }) {
      if (token) Object.assign(token, user);
      return token;
    },
    async session({ session, token }) {
      Object.assign(session.user, token);
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      return isAuthorized(auth, nextUrl);
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string().min(6),
            password: z.string().min(6),
            remember: z
              .union([z.string(), z.boolean()])
              .transform((val) => val === 'true' || val === true),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password, remember } = parsedCredentials.data;

          const user = await getUser({ username, password });

          if (!user) return null;

          const maxAge = remember ? 30 * 24 * 60 * 60 : 0;

          const expires = maxAge
            ? new Date(Date.now() + maxAge * 1000).toISOString()
            : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

          return { ...user, remember, maxAge, expires };
        }

        return null;
      },
    }),
  ],
});
