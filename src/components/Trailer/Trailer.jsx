import React from 'react';
import Youtube from 'react-youtube';

function Trailer() {
  const otps = {
    height: '250',
    width: '350',
  };
  return (
    <div>
      <Youtube
        videoId="li4jOV5j7SI"
        opts={otps}
      />
    </div>
  );
}
export default Trailer;
