import { useState } from "react";
import { TodoItem, User } from "../models";
import * as db from "./firebase/db";

const firebaseCollectionId = "todo";

export const service = {
  useItems(user: User) {
    const [items, setItems] = useState<TodoItem[]>([]);
    db.observeData(firebaseCollectionId, user.id, {
      next({ docs }) {
        const items = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setItems(items as TodoItem[]);
      },
    });

    return { items };
  },

  create: async (item: Omit<TodoItem, "id">, user: User): Promise<TodoItem> => {
    const doc = await db.insertDatum(firebaseCollectionId, user.id, item);

    return {
      ...item,
      id: doc.id,
    };
  },

  update: async (item: TodoItem, user: User): Promise<void> => {
    return db.updateDatum(firebaseCollectionId, user.id, {
      ...item,
    });
  },

  delete: async (id: string, user: User): Promise<void> => {
    return db.deleteDatum(firebaseCollectionId, user.id, id);
  },
};
