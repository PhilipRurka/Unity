import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { userModel } from '@unity/models';
import type { UserReqType } from '@unity/types';

import mongoConnect from '@/Lib/mongoConnect';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials: Record<never, string> | undefined) {
        const { email, password } = credentials as UserReqType;

        try {
          if (email !== 'hey@philiprurka.com') throw new Error('');
          await mongoConnect();
          const user = await userModel.findOne({ email });

          if (!user) return null;

          const isPasswordMatch = await bcrypt.compareSync(password, user.password);

          if (!isPasswordMatch) return null;

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};

export default authOptions;
