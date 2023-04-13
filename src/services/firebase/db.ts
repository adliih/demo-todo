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

function collectionRef(collectionId: string) {
  return collection(db, collectionId);
}

export function observeData<T>(
  collectionId: string,
  observer: {
    next?: (snapshot: QuerySnapshot<DocumentData>) => void;
  }
) {
  const q = query(collectionRef(collectionId), orderBy("createdAt", "asc"));
  return onSnapshot(q, observer);
}

export function insertDatum(collectionId: string, data: any) {
  return addDoc(collectionRef(collectionId), {
    ...data,
    createdAt: Timestamp.now(),
  });
}

export function deleteDatum(collectionId: string, id: string) {
  return deleteDoc(doc(collectionRef(collectionId), id));
}

export function updateDatum(collectionId: string, data: { id: string }) {
  return setDoc(doc(collectionRef(collectionId), data.id), {
    ...data,
    updatedAt: Timestamp.now(),
  });
}
