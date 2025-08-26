
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNames } from "./dbConnect";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email : { label: "Email", type: "text", placeholder: "useremail@gmai.com" },
        password: { label: "Password", type: "password" },
     
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(credentials);
        const user = await dbConnect(collectionNames.USERS).findOne({ email });
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
                session.user.email = token.email;
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.email = user.email
                token.role = user.role
            }
            return token
        }
}
};