import React from 'react';
import {
  ContentWrapper,
  MovieSearchResult,
  SearchBar,
  Trailer,
} from '../../index';

const ContentContainer = () => (
  <ContentWrapper>
    <SearchBar />
    <MovieSearchResult />
    <Trailer />
  </ContentWrapper>
);

export default ContentContainer;
