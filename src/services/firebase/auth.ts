import {
  NextOrObserver,
  User,
  getAuth,
  signInAnonymously,
  signOut,
} from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);

export function getCurrentUser() {
  return auth.currentUser;
}

export function observeAuthChange(observer: NextOrObserver<User | null>): void {
  auth.onAuthStateChanged(observer);
}

export function anonymousLogin() {
  return signInAnonymously(auth);
}

export function logout() {
  return signOut(auth);
}
