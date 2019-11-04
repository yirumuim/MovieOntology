import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  MovieSearchResult,
  SearchBar,
  // ShortInformation,
} from '../../components/index';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  item: {
    display: Grid,
  },
}));


const ContentContainer = (props) => {
  const classes = useStyles();
  const {
    onSearchResultChange,
    onSearchMovieCdChange,
    searchResult,
    index,
  } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} xm={2}>
          <SearchBar
            className="SearchBar"
            onSearchResultChange={onSearchResultChange}
          />
        </Grid>
        <Grid item xs={12} xm={4}>
          <MovieSearchResult
            className="MovieSearchResult"
            index={index}
            searchResult={searchResult}
            onSearchMovieCdChange={onSearchMovieCdChange}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentContainer;
