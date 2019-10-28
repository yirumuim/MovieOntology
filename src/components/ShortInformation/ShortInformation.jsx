import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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

const ShortInformation = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="https://search.pstatic.net/common/?src=https%3A%2F%2Fssl.pstatic.net%2Fsstatic%2Fpeople%2F82%2F201909241213414821.jpg&type=u120_150&quality=95"
          title="Live from space album cover"
        />
        <CardMedia
          className={classes.cover}
          image="http://www.kobis.or.kr/common/mast/people/2019/07/9b53a6d4aec043a38365570f0139089c.jpg"
          title="Live from space album cover"
        />
        <CardMedia
          className={classes.cover}
          image="http://www.kobis.or.kr/common/mast/people/2019/07/912db92b701645529d79c97e23b92ea2.jpg"
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography>
            <p>출연진 : 조정석, 윤아, 고두심</p>
            <p>개봉일 : 2019.07.31</p>
            <p>장르 : 액션, 코미디</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShortInformation;
