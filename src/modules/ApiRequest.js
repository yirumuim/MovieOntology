import firestore from '../firestore';

export default {
  getMovieTrailer(key) {
    const collectionRef = firestore.collection('Movie').doc(key);
    return collectionRef.get().then((value) => value.data().trailer);
  },
  getMoviePoster(key) {
    const collectionRef = firestore.collection('Movie').doc(key);
    return collectionRef.get().then((value) => value.data().poster);
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
