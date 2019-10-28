import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import ApiRequest from '../../modules/ApiRequest';


const Trailer = (props) => {
  const [trailer, setTrailer] = useState('');
  const { searchMovieCd } = props;

  const fetchTrailer = async (key) => {
    const trailerKey = await ApiRequest.getMovieTrailer(key);
    setTrailer(trailerKey);
  };

  useEffect(() => {
    const regex = /^[0-9]{8}$/;
    if (searchMovieCd !== '' && regex.test(searchMovieCd)) {
      fetchTrailer(searchMovieCd);
    }
  }, [searchMovieCd]);

  const opts = {
    width: '100%',
  };
  return (
    <div>
      <Youtube
        videoId={trailer}
        opts={opts}
      />
    </div>
  );
};

export default Trailer;
