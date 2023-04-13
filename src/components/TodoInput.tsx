import { ChangeEvent, FormEvent, useState } from "react";

/**
 * Form for input
 */
export function TodoInput() {
  const [todo, setTodo] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) {
      return;
    }

    console.log("Creating todo of: ", todo);

    // FIXME call insert todo

    setTodo("");
  };

  const handleTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value || "");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          aria-label="Fill New Todo Here"
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleTodoChange(e)}
        />
      </form>
    </>
  );
}
