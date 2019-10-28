import firestore from '../firestore';

export default {
  getMovieTrailer(key) {
    const collectionRef = firestore.collection('Movie').doc(key);
    return collectionRef.get().then((value) => value.data().trailer)
      .catch((error) => {
        console.log(`getMovieTrailer - ${error}`); // eslint-disable-line no-console
        return ' ';
      });
  },
  getMoviePoster(key) {
    const collectionRef = firestore.collection('Movie').doc(key);
    return collectionRef.get().then((value) => value.data().poster)
      .catch((error) => {
        console.log(`getMoviePoster - ${error}`); // eslint-disable-line no-console
        // 대체 이미지 (쿼카) : https://user-images.githubusercontent.com/18658656/67674980-4e597280-f9c1-11e9-88d0-2d638da8fefa.PNG
        return ' ';
      });
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
