import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { postLoginApi } from "@/services";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "name@email.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        const result = await postLoginApi(credentials);

        console.log(result);

        if (result.user) {
          return {
            id: result.user._id,
            name: result.user.name,
            email: result.user.email,
            picture: result.user.avatar,
            accessToken: result.token,
          };
        } else {
          throw new Error(result.msg);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/account/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
