import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import {
  ProcessSearchResults,
  SearchBar,
} from '../../chart_components/index';

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

  const handleSearchResultChange = (e) => {
    setSearchResult(e);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container align-items-xs-center>
        <Grid item xs={12} xm={2}>
          <SearchBar
            className="SearchBar"
            onSearchResultChange={handleSearchResultChange}
          />
        </Grid>
        <Grid item xs={12} xm={10}>
          {/* <DetailVisualizationTree /> */}
          <ProcessSearchResults
            className="ProcessSearchResults"
            searchResult={searchResult}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicationContainer;
