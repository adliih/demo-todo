import "./App.css";
import { TodoInput, TodoList } from "./components";
import AuthService from "./services/AuthService";
import { Login } from "./pages";
import { UserInfo } from "./components/login";

function App() {
  const { user } = AuthService.useAuthUser();

  if (!user) {
    return <Login />;
  }

  return (
    <div className="App">
      <UserInfo user={user} />
      <TodoInput user={user} />
      <TodoList user={user} />
    </div>
  );
}

export default App;
