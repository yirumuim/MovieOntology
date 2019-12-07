import React, { useState, useEffect, useReducer } from 'react';
import _ from 'lodash';

import KobisApi from '../../modules/KobisApi';
// eslint-disable-next-line import/no-cycle
import { DetailVisualizationGraph } from '../index';

function reducer(state, action) {
  switch (action.key) {
    case 'movieNm':
      state.nodes.push({
        id: action.value,
        color: 'red',
        size: 1000,
      });
      state.links.push({
        source: action.value,
        target: '장르',
      });
      state.links.push({
        source: action.value,
        target: '개봉일',
      });
      state.links.push({
        source: action.value,
        target: '감독',
      });
      state.links.push({
        source: action.value,
        target: '배우',
      });
      state.links.push({
        source: action.value,
        target: '회사',
      });
      break;
    case 'openDt':
      state.nodes.push({
        id: action.value,
        color: 'yellow',
      });
      state.links.push({
        source: '개봉일',
        target: action.value,
      });
      break;
    case 'genres':
      Object.values(action.value).forEach((item) => {
        state.nodes.push({
          id: item.genreNm,
          color: 'blue',
        });
        state.links.push({
          source: '장르',
          target: item.genreNm,
        });
      });
      break;
    case 'actors':
      const abc = _.slice(Object.values(action.value)
        .map((item) => (item.peopleNm)), 0, 3);

      abc.forEach((item) => {
        state.nodes.push({
          id: item,
          color: 'black',
        });
        state.links.push({
          source: '배우',
          target: item,
        });
      });

      // Object.values(action.value).forEach((item) => {
      // state.nodes.push({
      //   id: item.peopleNm,
      //   color: 'black',
      // });
      // state.links.push({
      //   source: '배우',
      //   target: item.peopleNm,
      // });
      // });
      break;
    case 'directors':
      Object.values(action.value).forEach((item) => {
        state.nodes.push({
          id: item.peopleNm,
          color: 'green',
        });
        state.links.push({
          source: '감독',
          target: item.peopleNm,
        });
      });
      break;
    case 'companys':
      Object.values(action.value).forEach((item) => {
        state.nodes.push({
          id: item.companyNm,
          color: 'purple',
        });
        state.links.push({
          source: '회사',
          target: item.companyNm,
        });
      });
      break;
    default:
  }
  return { ...state };
}

const ProcessSearchResults = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    nodes: [
      {
        id: '장르',
        color: 'blue',
        size: 400,
      },
      {
        id: '개봉일',
        color: 'yellow',
        size: 400,
      },
      {
        id: '감독',
        color: 'green',
        size: 400,
      },
      {
        id: '배우',
        color: 'black',
        size: 400,
      },
      {
        id: '회사',
        color: 'purple',
        size: 400,
      },
    ],
    links: [],
  });

  const [graphData, setGraphData] = useState(
    {
      nodes: [
        {
          id: '장르',
          color: 'blue',
          size: 400,
        },
        {
          id: '개봉일',
          color: 'blue',
          size: 400,
        },
        {
          id: '감독',
          color: 'blue',
          size: 400,
        },
        {
          id: '배우',
          color: 'blue',
          size: 400,
        },
        {
          id: '회사',
          color: 'blue',
          size: 400,
        },
      ],
      links: [],
    },
  );

  const { searchResult } = props;

  const fetchSearchResult = async (searchValue) => {
    const result = await KobisApi.getAllDataFromMovieName(searchValue);
    // 검색 결과가 있는 경우
    if (KobisApi.isHaveResultValuesFromRequest(result)) {
      const resultMovieCd = KobisApi.getFirstMovieCdFromRequest(result);

      const detailResult = await KobisApi.getMovieDetailFromCd(resultMovieCd);
      Object.entries(detailResult).forEach((item) => {
        console.log(item);
        dispatch({ key: item[0], value: item[1] });
      });
      setGraphData(state);
    }
  };

  useEffect(() => {
    if (searchResult !== '') {
      fetchSearchResult(searchResult);
    }
  }, [searchResult]);

  // console.log(state);
  return (
    <DetailVisualizationGraph
      graphData={graphData}
    />
  );
};

export default ProcessSearchResults;
