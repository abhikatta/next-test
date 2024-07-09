// resource: next.auth.js.org
import { IUser } from "@models/types";
import User from "@models/user";
import { connnectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  async session({ session }: { session: { user: IUser } }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });
    session.user.id = (sessionUser?._id as string).toString();
    return session;
  },
  async signIn({ profile }: { profile: { email: string; name: string; picture: string } }) {
    try {
      await connnectToDB();
      // check if user exits
      const userExists = await User.findOne({
        email: profile.email,
      });
      // else create and save user to db
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
