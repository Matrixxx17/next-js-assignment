import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const providers = [
  CredentialsProvider({
    name: "Credentials",

    credentials: {
      email: {
        label: "Email",
        type: "email"
      },
      password: {
        label: "Password",
        type: "password"
      }
    },

    async authorize(credentials) {
      if (
        credentials.email === "advisor@hdfclife.com" &&
        credentials.password === "Advisor@123"
      ) {
        return {
          id: "advisor-1",
          name: "HDFC Advisor",
          email: "advisor@hdfclife.com"
        };
      }

      return null;
    }
  })
];

if (
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET
) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  );
}
export default NextAuth({
  providers,

  session: {
    strategy: "jwt"
  }
});