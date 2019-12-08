import React from 'react';
import { Graph } from 'react-d3-graph';

const myConfig = {
  height: 700,
  width: 1200,
  nodeHighlightBehavior: true,
  node: {
    color: 'lightgreen',
    size: 200,
    highlightStrokeColor: 'blue',
  },
  link: {
    highlightColor: 'lightblue',
  },
};
const ddata = {
  nodes: [
    { id: '장르', color: 'blue', size: 400 },
    { id: '개봉일', color: 'yellow', size: 400 },
    { id: '감독', color: 'green', size: 400 },
    { id: '배우', color: 'black', size: 400 },
    { id: '회사', color: 'purple', size: 400 },
    { id: '조커(Joker)', color: 'red', size: 1000 },
    { id: '20191002', color: 'yellow' },
    { id: '액션', color: 'blue' },
    { id: '드라마', color: 'blue' },
    { id: '스릴러', color: 'blue' },
    { id: '토드 필립스', color: 'green' },
    { id: '호아킨 피닉스(Joaquin Phoenix)', color: 'black' },
    { id: '재지 비츠(Zazie Beetz)', color: 'black' },
    { id: '로버트 드 니로(Robert DeNiro)', color: 'black' },
    { id: '워너브러더스 코리아(주)', color: 'purple' },
    { id: '워너브러더스 코리아(주)', color: 'purple' },
  ],
  links: [
    { source: '조커(Joker)', target: '장르' },
    { source: '조커(Joker)', target: '개봉일' },
    { source: '조커(Joker)', target: '감독' },
    { source: '조커(Joker)', target: '배우' },
    { source: '조커(Joker)', target: '회사' },
    { source: '개봉일', target: '20191002' },
    { source: '장르', target: '액션' },
    { source: '장르', target: '드라마' },
    { source: '장르', target: '스릴러' },
    { source: '감독', target: '토드 필립스' },
    { source: '배우', target: '호아킨 피닉스(Joaquin Phoenix)' },
    { source: '배우', target: '재지 비츠(Zazie Beetz)' },
    { source: '배우', target: '로버트 드 니로(Robert DeNiro)' },
    { source: '회사', target: '워너브러더스 코리아(주)' },
    { source: '회사', target: '워너브러더스 코리아(주)' },
  ],
};
const data = {
  nodes: [
    {
      id: '엑시트',
      color: 'red',
      size: 500,
    },
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
      id: '제작사',
      color: 'blue',
      size: 400,
    },
    { id: '코미디' },
    { id: '액션' },
    { id: '이상근' },
    { id: '조정석' },
    { id: '윤아' },
    { id: '고두심' },
    { id: '(주)외유내강' },
    { id: '(주)필름케이' },
    { id: '20190731' },
    { id: '공조' },
  ],
  links: [
    { source: '엑시트', target: '장르' },
    { source: '엑시트', target: '개봉일' },
    { source: '엑시트', target: '감독' },
    { source: '엑시트', target: '배우' },
    { source: '개봉일', target: '20190731' },
    { source: '엑시트', target: '제작사' },
    { source: '장르', target: '코미디' },
    { source: '장르', target: '액션' },
    { source: '감독', target: '이상근' },
    { source: '배우', target: '조정석' },
    { source: '배우', target: '윤아' },
    { source: '윤아', target: '공조' },
    { source: '배우', target: '고두심' },
    { source: '제작사', target: '(주)외유내강' },
    { source: '제작사', target: '(주)필름케이' },
  ],
};

const DetailVisualization = (props) => {
  const { graphData } = props;
  console.log(graphData);
  console.log(JSON.stringify(graphData));

  return (
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={graphData}
      config={myConfig}
    />
  );
};

// const DetailVisualization = () => (
//   <Graph
//     id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
//     data={data}
//     config={myConfig}
//   />
// );


export default DetailVisualization;
