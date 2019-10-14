import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  MovieSearchResult,
  SearchBar,
  Trailer,
  ShortInformation,
} from '../../components/index';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  item: {
    display: Grid,
  },
}));


const ContentContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} xm={2}>
          <SearchBar className="SearchBar" />
        </Grid>
        <Grid item xs={12} xm={4}>
          <MovieSearchResult className="MovieSearchResult" />
        </Grid>
        <Grid item xs={12} xm={3}>
          <Trailer className="Trailer" />
        </Grid>
        <Grid item xs={12} xm={3}>
          <ShortInformation className="ShortInformation" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentContainer;
