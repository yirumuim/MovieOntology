import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import MoiveSearchContents from './MovieSearchContents';
import ApiRequest from '../../modules/ApiRequest';

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

const MovieSearchResult = (props) => {
  const [poster, setPoster] = useState('');
  const { searchResult } = props;

  const fetchPoster = async (key) => {
    const posterKey = await ApiRequest.getMoviePoster(key);
    setPoster(posterKey);
  };

  useEffect(() => {
    const regex = /^[0-9]{8}$/;
    if (searchResult !== '' && regex.test(searchResult)) {
      fetchPoster(searchResult);
    }
  }, [searchResult]);

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={poster}
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <MoiveSearchContents
            searchResult={searchResult}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieSearchResult;
