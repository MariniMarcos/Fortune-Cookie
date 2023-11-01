// components/FortuneCookie.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import cookieClosed from '../assets/cookie-closed1.png';
import cookieOpen from '../assets/cookie-open.png';

const FortuneCookie = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: open ? 0 : 1,
    transform: `perspective(600px) rotateY(${open ? 180 : 0}deg)`,
  });

  return (
    <animated.div className="fortune-cookie" onClick={() => { setOpen(true); onClick(); }}>
      <animated.img
        src={cookieOpen}
        alt="Closed Fortune Cookie"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          position: 'absolute',
          width: '100vw',
          paddingTop: '2rem',
          marginLeft: '0.5rem',
        }}
      />
      <animated.img
        src={cookieClosed}
        alt="Open Fortune Cookie"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
          position: 'absolute',
          width: '100%',
        }}
      />
    </animated.div>
  );
};

export default FortuneCookie;
