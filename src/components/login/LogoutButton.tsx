import AuthService from "../../services/AuthService";

export function LogoutButton() {
  return (
    <>
      <button onClick={() => AuthService.signOut()}>
        <label>Logout</label>
      </button>
    </>
  );
}
