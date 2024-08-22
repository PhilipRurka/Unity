import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

const checkIfUserAuthenticated = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  return token?.sub === '6640e38ce23790af77133226';
};

export default checkIfUserAuthenticated;
