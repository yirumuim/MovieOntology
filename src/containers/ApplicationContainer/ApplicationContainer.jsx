import React from 'react';
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} align-items-xs-center>
        <Grid item xs={6}>
          <ContentContainer className="ContentContainer" />
        </Grid>
        <Grid item xs={4}>
          <ExtraContentsContainer className="ExtraContentsContainer" />
        </Grid>
      </Grid>
    </div>
  );
};

export default ApplicationContainer;
