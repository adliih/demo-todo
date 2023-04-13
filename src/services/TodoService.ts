import { TodoItem } from "../models";
import * as db from "./firebase/db";

const firebaseCollectionId = "todo";

export const service = {
  observe: (observer: (items: TodoItem[]) => {}): void => {
    db.observeData(firebaseCollectionId, {
      next({ docs }) {
        const items = docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        observer(items as TodoItem[]);
      },
    });
  },

  create: async (item: Omit<TodoItem, "id">): Promise<TodoItem> => {
    const doc = await db.insertDatum(firebaseCollectionId, item);

    return {
      ...item,
      id: doc.id,
    };
  },

  update: async (item: TodoItem): Promise<void> => {
    return db.updateDatum(firebaseCollectionId, item);
  },

  delete: async (id: string): Promise<void> => {
    return db.deleteDatum(firebaseCollectionId, id);
  },
};
