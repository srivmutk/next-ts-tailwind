import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next-auth/_utils';

const options = {
    site: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  
    // Configure one or more authentication providers
    providers: [
      Providers.Google({
        clientId: String(process.env.GOOGLE_ID),
        clientSecret: String(process.env.GOOGLE_SECRET),
      }),
      // Providers.GitHub({
      //   clientId: process.env.GITHUB_ID,
      //   clientSecret: process.env.GITHUB_SECRET,
      // }),
      // Providers.Email({
      //   server: process.env.EMAIL_SERVER,
      //   from: process.env.EMAIL_FROM,
      // }),
    ],
  
    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
  };
  
  export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options);