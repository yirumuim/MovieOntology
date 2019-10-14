import React from 'react';
import {
  ContentWrapper,
  MovieSearchResult,
  SearchBar,
  Trailer,
  ShortInformation,
} from '../../components/index';

const ContentContainer = () => (
  <ContentWrapper>
    <SearchBar />
    <MovieSearchResult />
    <Trailer />
    <ShortInformation />
  </ContentWrapper>
);

export default ContentContainer;
