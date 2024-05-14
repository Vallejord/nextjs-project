import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //invoked on successful sign in
    async signIn({ profile }) {
      //1. coonect to database
      //2.check if user exists
      //3.if not, then add user to database
      //4. return true to allow the sign in
    },
    //modifies the session object
    async session({ session }) {
      //1. get the user from db
      //2. asign user id to session
      //.3 return that session
    },
  },
};