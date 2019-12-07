import React from 'react';
import { Tree, treeUtil } from 'react-d3-tree';


const myTreeData = [
  {
    name: '엑시트',
    children: [
      {
        name: '장르',
        children: [
          {
            name: '코미디',
          },
          {
            name: '액션',
          },
        ],
      },
      {
        name: '개봉일',
        children: [
          {
            name: '20190731',
          },
        ],
      },
      {
        name: '감독',
        children: [
          {
            name: '이상근',
          },
        ],
      },
      {
        name: '배우',
        children: [
          {
            name: '조정석',
          },
          {
            name: '윤아',
          },
          {
            name: '고두심',
          },
          {
            name: '박인환',
          },
        ],
      },
      {
        name: '제작사',
        children: [
          {
            name: '(주)외유내강',
          },
          {
            name: '(주)필름케이',
          },
        ],
      },
    ],
  },
];

const DetailVisualization = () => {
  const a = null;

  return (
    <div id="treeWrapper" style={{ width: '100em', height: '40em' }}>

      <Tree data={myTreeData} />

    </div>
  );
};

export default DetailVisualization;
