import { LogoutButton } from ".";
import { User } from "../../models";

export function UserInfo({ user }: { user: User }) {
  return (
    <>
      <div>
        <h1>User ID: {user.id}</h1>
        <h2>Anonymous: {String(user.isAnonymous)}</h2>
      </div>
      <LogoutButton />
    </>
  );
}
