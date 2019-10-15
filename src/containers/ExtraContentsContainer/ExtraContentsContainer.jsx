import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Trailer,
  ExtraContentsList,
} from '../../components/index';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  item: {
    display: Grid,
  },
}));


const ExtraContentsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={12} xm={6}>
          <ExtraContentsList className="ExtraContentsList" />
        </Grid>
        <Grid item xs={12} xm={6}>
          <Trailer className="Trailer" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExtraContentsContainer;
