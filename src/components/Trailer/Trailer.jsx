import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';

import ApiRequest from '../../modules/ApiRequest';

const Trailer = () => {
  const [trailer, setTrailer] = useState('');

  const fetchTrailer = async (collection, key) => {
    const temp = await ApiRequest.getRawCollection(collection, key);
    setTrailer(temp);
    return temp;
  };

  useEffect(() => {
    fetchTrailer('Movie', '20199950');
  }, [trailer]);

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
