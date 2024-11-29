import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectToDatabase } from '@unity/api-methods';
import { UserModel } from '@unity/models';
import type { UserDocument, UserReqType } from '@unity/types';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials: Record<never, string> | undefined) {
        const { email, password } = credentials as UserReqType;

        try {
          await connectToDatabase();
          const user: UserDocument | null = await UserModel.findOne({ email });

          if (!user) return null;

          const isPasswordMatch = bcrypt.compareSync(password, user.password);

          if (!isPasswordMatch || user.status === 'disabled') return null;

          return user as any;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session: async ({ session, token }) => {
      const newSession: any = { ...session };

      if (newSession?.user) {
        newSession.user.id = token.sub;
      }

      return newSession;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

export default authOptions;
