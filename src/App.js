import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import lottie from 'lottie-web';
import { useMouseState, useWindowResize } from 'beautiful-react-hooks';

const TOTAL_FRAME = 100;

function App() {
  const ref = useRef();
  const { clientX, clientY } = useMouseState(ref);
  const [animation, setAnimation] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById('bm'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'T&O Logo3.json' // the path to the animation json
    });
    setAnimation(anim);
  }, []);

  useWindowResize((event) => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  });

  useEffect(() => {
    const frame = parseInt(Number(clientX) * TOTAL_FRAME / Number(width));
    // console.log(frame);
    animation && animation.goToAndStop(frame, 1);
  }, [animation, clientX, clientY, width]);

  return (
    <div id="bm" style={{ width: '100%', height: '100%' }} ref={ref}>

    </div>
  );
}

export default App;
