import React, { useState, useEffect, useReducer } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import _ from 'lodash';

import ApiRequest from '../../modules/ApiRequest';
import KobisApi from '../../modules/KobisApi';
import MoiveSearchContents from './MovieSearchContents';
import ShortInformation from '../ShortInformation/ShortInformation';

const useStyles = makeStyles((theme) => ({
  card: {
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cover: {
    paddingTop: '140%',
    width: '100%',
    display: 'flex',
  },
  btn_grid: {
    backgroundColor: 'gray',
  },
}));

function reducer(state, action) {
  switch (action.key) {
    case 'actors':
      return {
        ...state,
        [action.key]: _.slice(Object.values(action.value)
          .map((item) => (item.peopleNm)), 0, 3),
      };
    case 'directors':
      return {
        ...state,
        [action.key]: _.slice(Object.values(action.value)
          .map((item) => (item.peopleNm)), 0, 2),
      };
    case 'genres':
      return {
        ...state,
        [action.key]: _.slice(Object.values(action.value)
          .map((item) => (item.genreNm)), 0, 3),
      };
    default:
      return {
        ...state,
        [action.key]: action.value,
      };
  }
}

const MovieSearchResult = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    actors: [],
    directors: [],
    genres: [],
    movieNm: '',
  });
  const [poster, setPoster] = useState('');
  const [expanded, setExpanded] = React.useState(false);

  const { searchResult, onSearchMovieCdChange } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchPoster = async (key) => {
    const posterKey = await ApiRequest.getMoviePoster(key);
    setPoster(posterKey);
  };

  const fetchSearchResult = async (searchValue) => {
    const result = await KobisApi.getAllDataFromMovieName(searchValue);
    // 검색 결과가 있는 경우
    if (KobisApi.isHaveResultValuesFromRequest(result)) {
      const resultMovieCd = KobisApi.getOneMovieCdFromRequest(result);

      onSearchMovieCdChange(resultMovieCd);

      fetchPoster(resultMovieCd);

      const detailResult = await KobisApi.getMovieDetailFromCd(resultMovieCd);
      Object.entries(detailResult).forEach((item) => {
        dispatch({ key: item[0], value: item[1] });
      });
    }
  };

  useEffect(() => {
    if (searchResult !== '') {
      fetchSearchResult(searchResult);
      setExpanded(false);
    }
  }, [searchResult]);

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <CardMedia
              className={classes.cover}
              image={poster}
              title="Live from space album cover"
            />
          </Grid>
          <Grid item xs={12} sm={7} className={classes.content}>
            <MoiveSearchContents
              searchResult={searchResult}
              state={state}
            />
          </Grid>
          <Grid item xs={12}>
            <CardActions disableSpacing className={classes.btn_grid}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <ShortInformation
            state={state}
          />
        </Collapse>
      </Card>
    </div>
  );
};

export default MovieSearchResult;
