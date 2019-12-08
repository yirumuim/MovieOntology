import Axios from 'axios';

import config from '../KobisConfig';

export default {
  async getAllDataFromMovieName(movieName) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${config.apiKey}&movieNm=${movieName}`,
    );
    return result.data.movieListResult;
  },
  async getMovieListFromMovieName(movieName) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${config.apiKey}&movieNm=${movieName}`,
    );
    return result.movieList;
  },
  async getMovieDetailFromCd(movieCd) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${config.apiKey}&movieCd=${movieCd}`,
    );
    return result.data.movieInfoResult.movieInfo;
  },
  async getActorsFromActorName(peopleName) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${config.apiKey}&peopleNm=${peopleName}`,
    );
    return result.data.peopleListResult.peopleList;
  },
  async getActorDetailFromCd(actorCd) {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleInfo.json?key=${config.apiKey}&movieCd=${actorCd}`,
    );
    return result.data;
  },
  getTotalCount(apiResult) {
    return apiResult.totCnt;
  },
  isHaveResultValuesFromRequest(apiResult) {
    if (apiResult.totCnt === 0) {
      return false;
    }
    return true;
  },
  getFirstMovieCdFromRequest(apiResult) {
    return apiResult.movieList[0].movieCd;
  },
  getOneMovieCdFromRequest(apiResult, index) {
    return apiResult.movieList[index].movieCd;
  },
  getOneActorCdFromActorRequest(apiResult) {
    return apiResult[0].peopleCd;
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
