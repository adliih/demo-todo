import AuthService from "../../services/AuthService";

export function AnonymousForm() {
  const handleButton = async () => {
    await AuthService.signInAnonymous();
  };

  return (
    <>
      <button onClick={handleButton}>
        <h2>Sign in Anonymously</h2>
      </button>
    </>
  );
}
