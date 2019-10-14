import React from 'react';
import Img from 'react-image';
import './ShortInformation.css';

function ShortInformation() {
  return (
    <div>
      <Img
        className="actor_image"
        src="http://www.kobis.or.kr/common/mast/people/2019/07/b9982ae04a9b4558885a1a6ac03d2fe1.jpg"
      />
      <Img
        className="actor_image"
        src="http://www.kobis.or.kr/common/mast/people/2019/07/9b53a6d4aec043a38365570f0139089c.jpg"
      />
      <Img
        className="actor_image"
        src="http://www.kobis.or.kr/common/mast/people/2019/07/912db92b701645529d79c97e23b92ea2.jpg"
      />
      <div>
        <p>출연진 : 조정석, 윤아, 고두심</p>
        <p>개봉일 : 2019.07.31</p>
        <p>장르 : 액션, 코미디</p>
      </div>
    </div>
  );
}

export default ShortInformation;
