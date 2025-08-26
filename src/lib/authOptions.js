
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNames } from "./dbConnect";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
     
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        console.log(credentials);
        const user = await dbConnect(collectionNames.USERS).findOne({ username });
        const passwordIsOk = password == user.password;

        if (passwordIsOk) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
 
    async session({ session, token, user }) {
            if (token) {
                session.user.username = token.username;
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.username = user.username
                token.role = user.role
            }
            return token
        }
}
};