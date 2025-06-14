import * as admin from 'firebase-admin';

export const putDataInCollection = async (collection: string, data: any) => {
  const db = admin.firestore();
  await db.collection(collection).add(data);
};

export const getDataFromCollection = async (collection: string, id: string) => {
  const db = admin.firestore();
  const document = await db.collection(collection).doc(id).get();
  return document.data();
};

export const getUserFromToken = async (token: string) => {
  const user = await admin.auth().getUser(token);
  return user;
};

export const testingToken = async (token: string) => {
  const user = await admin.auth().verifyIdToken(token);
  return user;
};
