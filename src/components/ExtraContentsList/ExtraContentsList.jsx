import React, { useState } from 'react';
import './ExtraContentsList.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ExtraContents from '../ExtraContents/ExtraContents';
import data from '../../data/ContentData';

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
const ExtraContentsList = () => {
  const classes = useStyles();
  const [properties, setProperties] = useState(data.properties);
  const [property, setProperty] = useState(data.properties[0]);

  const selectContent = (newIndex) => {
    setProperty(properties[newIndex]);
  };

  const number1 = [0, 1, 2, 3, 4];
  const number2 = [5, 6, 7, 8, 9];

  return (
    <div className="App">
      {/* <div className="content">
        <ExtraContents property={property} />
      </div> */}
      <Card className={classes.card}>
        <div className="contentList">
          <ol className="ol_1to5">
            {number1.map((i) => (
              <li>
                <div
                  role="button"
                  className="contentList_li"
                  onClick={() => selectContent(i)}
                  onKeyPress={() => selectContent(i)}
                  tabIndex={i}
                >
                  <span>
                    {properties[i].title}
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <ol className="ol_1to5" start="6">
            {number2.map((i) => (
              <li>
                <div
                  role="button"
                  className="contentList_li"
                  onClick={() => selectContent(i)}
                  onKeyPress={() => selectContent(i)}
                  tabIndex={i}
                >
                  <span>
                    {properties[i].title}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </div>
  );
};

export default ExtraContentsList;
