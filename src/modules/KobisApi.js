import React, { useState, useEffect } from 'react';
import Axios from 'axois';

export default {
    getMovieDetailFromCd(movieCd){
        const result = await Axios(
            `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=${movieCd}`,
        );
        return result;
    }

  // getRawCollection(collectionName) {
  //   return firestore.collection(collectionName)
  //     .get()
  //     .then((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => doc.data());
  //       return data;
  //     });
  // },
};
