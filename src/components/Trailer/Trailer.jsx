import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import ApiRequest from '../../modules/ApiRequest';


const Trailer = (props) => {
  const [trailer, setTrailer] = useState('');
  const { searchResult } = props;

  const fetchTrailer = async (key) => {
    const trailerKey = await ApiRequest.getMovieTrailer(key);
    setTrailer(trailerKey);
  };

  useEffect(() => {
    const regex = /^[0-9]{8}$/;
    if (searchResult !== '' && regex.test(searchResult)) {
      fetchTrailer(searchResult);
    }
  }, [searchResult]);

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
