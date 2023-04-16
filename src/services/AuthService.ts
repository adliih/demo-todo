import { useState } from "react";
import { User } from "../models";
import * as auth from "./firebase/auth";

interface ExternalUser {
  uid: any;
  isAnonymous: any;
}

export default {
  useAuthUser() {
    const [user, setUser] = useState<User | null>(null);
    auth.observeAuthChange({
      next(externalUser: ExternalUser) {
        if (!externalUser?.uid) {
          setUser(null);
          return;
        }
        setUser({
          id: externalUser.uid,
          isAnonymous: externalUser.isAnonymous,
        });
      },
    } as any);

    return { user };
  },

  async signInAnonymous(): Promise<User> {
    const { user } = await auth.anonymousLogin();
    return {
      id: user.uid,
      isAnonymous: user.isAnonymous,
    };
  },

  async signOut() {
    return auth.logout();
  },
};
