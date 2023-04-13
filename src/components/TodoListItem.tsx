import {
  ChangeEvent,
  FormEvent,
  MouseEvent as ReactMouseEvent,
  useState,
} from "react";
import { TodoItem } from "../models";
import { service } from "../services/TodoService";

/**
 * Render the editable and deleteable todo item
 */
export function TodoListItem({ todoItem }: { todoItem: TodoItem }) {
  const handleOnclick = async (
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    console.log("Deleting todo: ", todoItem);

    await service.delete(todoItem.id);

    console.log("Todo Deleted: ", todoItem);
  };

  const [value, setValue] = useState(todoItem.value);
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedTodo = {
      ...todoItem,
      value,
    };

    console.log("Updating todo", todoItem, "into", updatedTodo);

    await service.update(updatedTodo);

    console.log("Todo updated", updatedTodo);
  };

  return (
    <li>
      <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
        <input value={value} onChange={(e: any) => handleChange(e)} />
      </form>
      <button onClick={(e) => handleOnclick(e)}>
        <label>Delete</label>
      </button>
    </li>
  );
}
