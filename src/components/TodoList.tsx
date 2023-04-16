import { TodoListItem } from ".";
import { User } from "../models";
import { service } from "../services/TodoService";

/**
 * Listing all available todos
 */
export function TodoList({ user }: { user: User }) {
  const { items } = service.useItems(user);

  return (
    <ul>
      {items.map((item) => (
        <TodoListItem key={item.id} todoItem={item} user={user} />
      ))}
    </ul>
  );
}
