import React, { useState, useEffect, useReducer } from 'react';
import _ from 'lodash';

import KobisApi from '../../modules/KobisApi';
// eslint-disable-next-line import/no-cycle
// import ProcessDetailResults from './ProcessDetailResults';
// eslint-disable-next-line import/no-cycle
import { DetailVisualizationGraph } from '../index';

function reducer(state, action) {
  switch (action.key) {
    case 'movieNm':
      state.nodes.push({
        id: action.name,
        // id: `${action.name}(${action.value})`,
        color: 'red',
        size: 1000,
      });
      state.links.push({
        source: action.name,
        // source: `${action.name}(${action.value})`,
        target: '장르',
      });
      state.links.push({
        source: action.name,
        // source: `${action.name}(${action.value})`,
        target: '개봉일',
      });
      state.links.push({
        source: action.name,
        // source: `${action.name}(${action.value})`,
        target: '감독',
      });
      state.links.push({
        source: action.name,
        // source: `${action.name}(${action.value})`,
        target: '배우',
      });
      state.links.push({
        source: action.name,
        // source: `${action.name}(${action.value})`,
        target: '회사',
      });
      break;
    case 'openDt':
      state.nodes.push({
        id: action.value,
        size: 500,
        color: '#fff3af',
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
          size: 500,
          color: '#f67280',
        });
        state.links.push({
          source: '장르',
          target: item.genreNm,
        });
      });
      break;
    case 'actors':
      for (let i = 0; i < 3; i += 1) {
        state.nodes.push({
          // id: action.value[i].peopleNm,
          id: `${action.value[i].peopleNm}(${action.value[i].peopleNmEn})`,
          size: 500,
          color: '#7e0cf5',
        });
        state.links.push({
          source: '배우',
          // target: action.value[i].peopleNm,
          target: `${action.value[i].peopleNm}(${action.value[i].peopleNmEn})`,
        });
      }
      break;
    case 'directors':
      Object.values(action.value).forEach((item) => {
        state.nodes.push({
          id: item.peopleNm,
          size: 500,
          color: '#2c7873',
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
          size: 500,
          color: '#465881',
        });
        state.links.push({
          source: '회사',
          target: item.companyNm,
        });
      });
      break;
    default:
  }

  if (_.isEqual(action.key, 'detail')) {
    state.nodes.push({
      id: action.target,
      color: action.color,
    });
    state.links.push({
      source: action.source,
      target: action.target,
    });
  }

  return { ...state };
}

const ProcessSearchResults = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    nodes: [
      {
        id: '장르',
        color: '#f8b195',
        size: 400,
      },
      {
        id: '개봉일',
        color: '#ffd271',
        size: 400,
      },
      {
        id: '감독',
        color: '#004445',
        size: 400,
      },
      {
        id: '배우',
        color: '#400082',
        size: 400,
      },
      {
        id: '회사',
        color: '#1b2a49',
        size: 400,
      },
    ],
    links: [],
  });

  const [basicData, setBasicData] = useState(
    {
      nodes: [
        {
          id: '장르',
          color: '#f8b195',
          size: 400,
        },
        {
          id: '개봉일',
          color: '#ffd271',
          size: 400,
        },
        {
          id: '감독',
          color: '#004445',
          size: 400,
        },
        {
          id: '배우',
          color: '#400082',
          size: 400,
        },
        {
          id: '회사',
          color: '#1b2a49',
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
    let movieName = null;
    if (KobisApi.isHaveResultValuesFromRequest(result)) {
      const resultMovieCd = KobisApi.getFirstMovieCdFromRequest(result);

      const detailResult = await KobisApi.getMovieDetailFromCd(resultMovieCd);
      Object.entries(detailResult).forEach((item) => {
        if (_.isEqual(item[0], 'movieNm')) {
          // eslint-disable-next-line prefer-destructuring
          movieName = item[1];
        }
        dispatch({ key: item[0], value: item[1], name: movieName });
      });
    }

    Object.values(state.links).forEach(async (linksInfo) => {
      if (_.isEqual(linksInfo.source, '배우')) {
        const tempActorWord = _.split(linksInfo.target, '(');
        const actorEnName = _.split(tempActorWord[1], ')')[0];

        const actorsResult = await KobisApi.getActorsFromActorName(actorEnName);
        const actorFilmo = _.split(actorsResult[0].filmoNames, '|');

        // Object.values(actorFilmo).forEach((movie) => {
        //   dispatch({
        //     key: 'detail', target: movie, source: linksInfo.target, color: '#cd4dcc',
        //   });
        // });

        let count = 0;
        for (let i = 0; i < actorFilmo.length; i += 1, count += 1) {
          if (count > 5) break;
          if (!_.isEqual(actorFilmo[i], movieName)) {
            dispatch({
              key: 'detail', target: actorFilmo[i], source: linksInfo.target, color: '#cd4dcc',
            });
          }
        }
      }
    });

    setBasicData(state);
  };

  useEffect(() => {
    if (searchResult !== '') {
      fetchSearchResult(searchResult);
    }
  }, [searchResult]);

  return (
    <DetailVisualizationGraph
      graphData={basicData}
    />
  );
};

export default ProcessSearchResults;
