import Axios from 'axios';

export default {
  async getAllDataFromMovieName(movieName) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e&movieNm=${movieName}`,
    );
    return result.data.movieListResult;
  },
  async getMovieListFromMovieName(movieName) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e&movieNm=${movieName}`,
    );
    return result.movieList;
  },
  async getMovieDetailFromCd(movieCd) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=${movieCd}`,
    );
    return result.data.movieInfoResult.movieInfo;
  },
  isHaveResultValuesFromRequest(apiResult) {
    if (apiResult.totCnt === 0) {
      return false;
    }
    return true;
  },
  getOneMovieCdFromRequest(apiResult) {
    return apiResult.movieList[0].movieCd;
  },
  getActorsFromDetailRequest(apiDetailResult) {
    return apiDetailResult.actors;
  },
  getNameFromDetailRequest(apiDetailResult) {
    return apiDetailResult.movieNm;
  },
  getGenresFromDetailRequest(apiDetailResult) {
    return apiDetailResult.genres;
  },
  getDirectorsFromDetailRequest(apiDetailResult) {
    return apiDetailResult.directors;
  },
};
