import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import ApiRequest from '../../modules/ApiRequest';
import KobisApi from '../../modules/KobisApi';

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
    width: '20%',
    display: 'flex',
  },
}));

const ShortInformation = (props) => {
  const [photo, setPhoto] = useState([]);

  const { state } = props;
  const classes = useStyles();

  const fetchPhoto = async (key) => {
    const photoKey = await ApiRequest.getActorPhoto(key);
    return photoKey;
  };

  const saveActorsCd = async () => {
    const photoValue = state.actors.map(async (actor) => {
      const actorsResult = await KobisApi.getActorsFromActorName(actor);
      return fetchPhoto(KobisApi.getOneActorCdFromActorRequest(actorsResult));
    });
    setPhoto(await Promise.all(photoValue));
  };

  useEffect(() => {
    saveActorsCd();
  }, [state]);

  return (
    <div>
      <Card className={classes.card}>
        {
          photo.map((imageAddress) => (
            <CardMedia
              className={classes.cover}
              image={imageAddress}
              title="Live from space album cover"
            />
          ))
        }
        <CardContent className={classes.content}>
          <Typography>
            <p>
              출연진 :
              {' '}
              {
                state.actors.map((actor) => (
                  `${actor}, `
                ))
              }
            </p>
            <p>
              장르 :
              {' '}
              {
                state.genres.map((genre) => (
                  `${genre}, `
                ))
              }
            </p>
            <p>
              개봉일 :
              {' '}
              {state.openDt}
            </p>
            {/* <p>출연진 : 조정석, 윤아, 고두심</p>
            <p>개봉일 : 2019.07.31</p>
            <p>장르 : 액션, 코미디</p> */}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShortInformation;
