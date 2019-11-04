import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// eslint-disable-next-line import/no-cycle
import { ContentContainer, ExtraContentsContainer } from '../index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const ApplicationContainer = () => {
  const [searchResult, setSearchResult] = useState('');
  const [searchMovieCd, setsearchMovieCd] = useState('');
  const [index, setIndex] = useState(0);

  const handleSearchResultChange = (e) => {
    setSearchResult(e);
    setIndex(0);
  };

  const handleSearchMovieCdChange = (e) => {
    setsearchMovieCd(e);
  };
  const handleSelectMovie = (e) => {
    setIndex(e);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} align-items-xs-center>
        <Grid item xs={7}>
          <ContentContainer
            className="ContentContainer"
            onSearchResultChange={handleSearchResultChange}
            onSearchMovieCdChange={handleSearchMovieCdChange}
            searchResult={searchResult}
            searchMovieCd={searchMovieCd}
            index={index}
          />
        </Grid>
        <Grid item xs={5}>
          <ExtraContentsContainer
            className="ExtraContentsContainer"
            searchMovieCd={searchMovieCd}
            searchResult={searchResult}
            onSelectMovie={handleSelectMovie}
            index={index}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicationContainer;
