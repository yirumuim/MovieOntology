import React, { useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';

// import Kobis from '../../modules/KobisApi';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const MovieSearchContents = (props) => {
  // const [detailInfo, setDetailInfo] = useState(null);
  const [movieNm, setMovieNm] = useState(null);
  const [genres, setGenres] = useState(null);
  const [directors, setDirectors] = useState(null);
  const [actors, setActors] = useState(null);
  const [year, setYear] = useState(null);
  
  const { searchResult } = props;

  const fetchName = (result) => {
    const name = result.data.movieInfoResult.movieInfo.movieNm;
    setMovieNm(name);
  };
  const fetchGenres = (result) => {
    const genreArray = result.data.movieInfoResult.movieInfo.genres;
    setGenres(genreArray.map((item) => (item.genreNm)));
  };
  const fetchDirectors = (result) => {
    const directorArray = result.data.movieInfoResult.movieInfo.directors;
    setDirectors(directorArray.map((item) => (item.peopleNm)));
  };
  const fetchActors = (result) => {
    const actorArray = result.data.movieInfoResult.movieInfo.actors;
    setActors(actorArray.map((item) => (item.peopleNm)));
  };
  /* 
  const fetchYear = (result) => {
    const year = result.data.movieInfoResult.movieInfo.Opendt;
    if(year != ''){

    }
    setYear(actorArray.map((item) => (item.peopleNm)));
  };
  */
  const fetchInfoFromCd = async (movieCd) => {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=${movieCd}`,
    );
    fetchName(result);
    fetchGenres(result);
    fetchDirectors(result);
    fetchActors(result);
  };

  const fetchDetailInfo = async (movieCd) => {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e&movieNm=${movieCd}`,
    );
    const resultSize = result.data.movieListResult.movieList.length;
    // console.log(result.data.movieListResult.movieList);
    if (resultSize !== 0) {
      const resultMovieCd = result.data.movieListResult.movieList[0].movieCd;
      const detailResult = await Axios(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=${resultMovieCd}`,
      );
      fetchName(detailResult);
      fetchGenres(detailResult);
      fetchDirectors(detailResult);
      fetchActors(detailResult);
      // console.log(detailResult.data.movieInfoResult.movieInfo.actors);
      // console.log(detailResult.data.movieInfoResult.movieInfo);
    }
  };


  useEffect(() => {
    if (searchResult !== '') {
      fetchDetailInfo(searchResult);
    }
  }, [searchResult]);


  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Typography variant="h3">{movieNm}</Typography>
        <Typography variant="h6">
          <table>
            <tbody>
              <tr>
                <td>장르</td>
                <td>{genres}</td>
              </tr>
              <tr>
                <td>감독</td>
                <td>{directors}</td>
              </tr>
              <tr>
                <td>관객수</td>
                <td>2,589,600명</td>
              </tr>
              <tr>
                <td>출연배우</td>
                <td>{actors}</td>
              </tr>
              <tr>
                <td>검색결과</td>
                <td>{searchResult}</td>
              </tr>
            </tbody>
          </table>
        </Typography>
      </div>
    </MuiThemeProvider>
  );
};

export default MovieSearchContents;
