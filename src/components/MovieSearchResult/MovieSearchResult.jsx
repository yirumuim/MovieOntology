import React from 'react';
import Img from 'react-image';

import MovieSearchResultTemplate from '../MovieSearchResultTemplate/MovieSearchResultTemplate';

const MovieSearchResult = () => (
  <MovieSearchResultTemplate>
    <Img
      className="Search-Image"
      src="http://www.kobis.or.kr/common/mast/movie/2019/09/96dde341cfd74439953ce52a38b6919f.jpg"
    />
    <h1>조커</h1>
    <dl>
      <dt>평점</dt>
      <dd>9.24</dd>
      <dt>감독</dt>
      <dd>df</dd>
      <dt>관객수</dt>
      <dd>dfd</dd>
      <dt>출연배우</dt>
      <dd>dffd, dd</dd>
    </dl>

  </MovieSearchResultTemplate>
);
export default MovieSearchResult;
