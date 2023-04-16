import {
  DocumentData,
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { app } from "./app";

const db = getFirestore(app);

function collectionRef(collectionId: string, userId: string) {
  return collection(db, "users", userId, collectionId);
}

export function observeData<T>(
  collectionId: string,
  userId: string,
  observer: {
    next?: (snapshot: QuerySnapshot<DocumentData>) => void;
  }
) {
  const q = query(
    collectionRef(collectionId, userId),
    orderBy("createdAt", "asc")
  );
  return onSnapshot(q, observer);
}

export function insertDatum(collectionId: string, userId: string, data: any) {
  return addDoc(collectionRef(collectionId, userId), {
    ...data,
    createdAt: Timestamp.now(),
  });
}

export function deleteDatum(collectionId: string, userId: string, id: string) {
  return deleteDoc(doc(collectionRef(collectionId, userId), id));
}

export function updateDatum(
  collectionId: string,
  userId: string,
  data: { id: string } & { [key: string]: any }
) {
  return setDoc(doc(collectionRef(collectionId, userId), data.id), {
    ...data,
    updatedAt: Timestamp.now(),
  });
}
