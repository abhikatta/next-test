import { connnectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const Google = GoogleProvider({
  clientId: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
});
const handler = NextAuth({
  providers: [Google],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connnectToDB();
      // check if user exits
      // else create and save user to db
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
