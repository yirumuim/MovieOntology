import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Axios from 'axios';

import MoiveSearchContents from './MovieSearchContents';
import ApiRequest from '../../modules/ApiRequest';
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

const MovieSearchResult = (props) => {
  const [poster, setPoster] = useState('');
  const { searchResult, onSearchMovieCdChange } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fetchPoster = async (key) => {
    const posterKey = await ApiRequest.getMoviePoster(key);
    setPoster(posterKey);
  };

  const fetchSearchResult = async (searchValue) => {
    const result = await Axios(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=430156241533f1d058c603178cc3ca0e&movieNm=${searchValue}`,
    );
    const resultSize = result.data.movieListResult.movieList.length;
    // 검색 결과가 있는 경우
    if (resultSize !== 0) {
      const resultMovieCd = result.data.movieListResult.movieList[0].movieCd;
      onSearchMovieCdChange(resultMovieCd);
      fetchPoster(resultMovieCd);
      const detailResult = await Axios(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=${resultMovieCd}`,
      );
      console.log(detailResult.data.movieInfoResult.movieInfo.actors);
      console.log(detailResult.data.movieInfoResult.movieInfo);
    }
  };


  useEffect(() => {
    const regex = /^[0-9]{8}$/;
    if (searchResult !== '') {
      // if (regex.test(searchResult)) {
      //   fetchPoster(searchResult);
      // }
      fetchSearchResult(searchResult);
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
          <ShortInformation />
        </Collapse>
      </Card>
    </div>
  );
};

export default MovieSearchResult;
