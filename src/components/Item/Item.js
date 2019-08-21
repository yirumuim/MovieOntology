import React from 'react';
import './Item.css';

const Item = () => {
      return(
          <li className="Item_wrapper">
              <div className="Item_poster"> 
                <img src={"../../movie_image.jpg"} />
              </div>
              <div className="Item_content">
                <p>영화제목 : 알라딘</p>
                <p>배우 : 윌스미스</p>
                <p>개봉일 : 2019.07.31</p>
              </div>
          </li>
      );
};

export default Item;