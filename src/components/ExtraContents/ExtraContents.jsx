import React from 'react';
import './ExtraContents.css';

const ExtraContents = ({ property }) => {
  const {
    index,
    picture,
    title,
    genre,
    director,
    attendance,
    actors,
  } = property;
  return (
    <div id={`card-${index}`} className="card">
      <img className="poster" src={picture} alt={title} />
      <div className="details">
        <span className="index">{index + 1}</span>
        <table>
          <tbody>
            <tr>
              <td>장르</td>
              <td>{genre}</td>
            </tr>
            <tr>
              <td>감독</td>
              <td>{director}</td>
            </tr>
            <tr>
              <td>관객수</td>
              <td>{attendance}</td>
            </tr>
            <tr>
              <td>출연배우</td>
              <td>{actors}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtraContents;
