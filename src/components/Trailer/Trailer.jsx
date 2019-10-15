import React from 'react';
import Youtube from 'react-youtube';

function Trailer() {
  const opts = {
    width: '100%',
  };
  return (
    <div>
      <Youtube
        videoId="AuWCSeetJnw"
        opts={opts}
      />
    </div>
  );
}
export default Trailer;
