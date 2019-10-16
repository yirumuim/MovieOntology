import firestore from '../firestore';

export default {
  getRawCollection(collectionName, key) {
    const collectionRef = firestore.collection(collectionName).doc(key);
    return collectionRef.get().then((value) => value.data().trailer);
  },
  // getRawCollection(collectionName) {
  //   return firestore.collection(collectionName)
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       return data;
  //     });
  // },
};
