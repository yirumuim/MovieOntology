import React, { useState, useEffect, useReducer } from 'react';
import './ExtraContentsList.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import _ from 'lodash';

// import ExtraContents from '../ExtraContents/ExtraContents';
// import data from '../../data/ContentData';

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
    width: '35%',
    display: 'flex',
  },
}));

// functional component
const ExtraContentsList = (props) => {
  const classes = useStyles();
  // const [properties, setProperties] = useState(data.properties);
  // const [property, setProperty] = useState(data.properties[0]);
  const {
    onSelectMovie,
    searchResult,
  } = props;
  const [titles, setTitles] = useState([]);
  const [listCount, setListCount] = useState(0);

  // const number1 = [0, 1, 2, 3, 4];
  // const number2 = [5, 6, 7, 8, 9];

  const fetchSearchResult = async (searchValue) => {
    const result = await KobisApi.getAllDataFromMovieName(searchValue);
    // 검색 결과가 있는 경우
    const count = KobisApi.getTotalCount(result);
    if (count >= 10) {
      setListCount(10);
    } else {
      setListCount(count);
    }
    Object.entries(result.movieList).forEach((item) => {
      setTitles((t) => t.concat(item[1].movieNm));
    });
  };

  const initTitles = () => {
    setTitles([]);
  };

  useEffect(() => {
    initTitles();
    if (searchResult !== '') {
      fetchSearchResult(searchResult);
    }
  }, [searchResult]);


  return (
    <div className="App">
      {/* <div className="content">
        <ExtraContents property={property} />
      </div> */}
      <Card className={classes.card}>
        <div className="contentList">
          <ol className="ol_1to5">
            {Object.entries(titles).map((item) => (
              <li>
                <div
                  role="button"
                  className="contentList_li"
                  onClick={() => onSelectMovie(item[0])}
                  onKeyPress={() => onSelectMovie(item[0])}
                  tabIndex={item[0]}
                >
                  <span>
                    {item[1]}
                  </span>
                </div>
              </li>
            ))}
          </ol>


          {/* number1.map((i) => (
              <li>
                <div
                  role="button"
                  className="contentList_li"
                  onClick={() => onSelectMovie(i)}
                  onKeyPress={() => onSelectMovie(i)}
                  tabIndex={i}
                >
                  <span>
                    {properties[i].title}
                  </span>
                </div>
              </li>
            )) */}
          {/*
          <ol className="ol_1to5" start="6">
            {number2.map((i) => (
              <li>
                <div
                  role="button"
                  className="contentList_li"
                  onClick={() => onSelectMovie(i)}
                  onKeyPress={() => onSelectMovie(i)}
                  tabIndex={i}
                >
                  <span>
                    {properties[i].title}
                  </span>
                </div>
              </li>
            ))}
          </ol> */}
        </div>
      </Card>
    </div>
  );
};

export default ExtraContentsList;
