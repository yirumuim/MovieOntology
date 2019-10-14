import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  MovieSearchResult,
  SearchBar,
  Trailer,
  ShortInformation,
} from '../../components/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
        <Grid item xm={6}>
          <SearchBar className="SearchBar" />
        </Grid>
        <Grid item xm={6}>
          <MovieSearchResult className="MovieSearchResult" />
        </Grid>
        <Grid item xm={6}>
          <Trailer className="Trailer" />
        </Grid>
        <Grid item xm={6}>
          <ShortInformation className="ShortInformation" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentContainer;
