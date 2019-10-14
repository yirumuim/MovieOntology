import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import MoiveSearchContents from './MovieSearchContents';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    textAlign: 'vertical center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    padding: theme.spacing(5, 2),
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cover: {
    paddingTop: '56.25%',
    width: '35%',
    display: 'flex',
  },
}));

const MovieSearchResult = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="http://www.kobis.or.kr/common/mast/movie/2019/09/96dde341cfd74439953ce52a38b6919f.jpg"
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <MoiveSearchContents />
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieSearchResult;
