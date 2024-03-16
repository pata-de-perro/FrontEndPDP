import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { postLoginApi } from "@/services";

const authOptions = {
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

        if (result.user) {
          return { id: result.user._id, email: result.user.email };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/account/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
