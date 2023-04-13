import { TodoListItem } from ".";
import { useState, useEffect } from "react";
import { TodoItem } from "../models";

/**
 * Listing all available todos
 */
export function TodoList() {
  const [items, setItems] = useState<TodoItem[]>([]);

  const observeItems = async () => {
    // FIXME call: observe data
    setItems([
      {
        id: "id-1",
        value: "TODO 1",
      },
      {
        id: "id-2",
        value: "TODO 2",
      },
    ]);
  };

  useEffect(() => {
    observeItems();
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <TodoListItem key={item.id} todoItem={item} />
      ))}
    </ul>
  );
}
