import { adapter, providers } from '@pm/auth';
import NextAuth from 'next-auth';

export const authOptions = {
  providers,
  adapter,
  pages: {
    signIn: '/auth/login',
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

