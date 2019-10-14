import React from 'react';
import Youtube from 'react-youtube';

function Trailer() {
  const opts = {
    width: '100%',
  };
  return (
    <div>
      <Youtube
        videoId="li4jOV5j7SI"
        opts={opts}
      />
    </div>
  );
}
export default Trailer;
