import { adapter, providers } from '@pm/auth';
import NextAuth from 'next-auth';

const handler = NextAuth({
  providers,
  adapter,
  pages: {
    signIn: '/auth/login',
  }
})

export { handler as GET, handler as POST };
