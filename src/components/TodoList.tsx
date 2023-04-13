import { TodoListItem } from ".";
import { useState, useEffect } from "react";
import { TodoItem } from "../models";
import { service } from "../services/TodoService";

/**
 * Listing all available todos
 */
export function TodoList() {
  const [items, setItems] = useState<TodoItem[]>([]);

  const observeItems = async () => {
    service.observe(async (items) => setItems(items));
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
