
import React from 'react';
import Header from './Header';
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const counterVal = useSelector((state) => state.counter);
  const details = useSelector((state) => state.myDetails); 
  const dispatch = useDispatch();
  const INCREMENT = () => {
    dispatch({
        type: "INCREMENT"
    })
  };

  const DECREMENT = () => {
    dispatch({
        type: "DECREMENT"
    })
  };
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About Page!</p>
      <h2>from Redux {counterVal}</h2>
      <h2>{details.name}</h2>
      <Header />
      <input type="button" value="INCREMENT" onClick={INCREMENT} />
      <input type="button" value="DECREMENT" onClick={DECREMENT} />
    </div>
  );
};

export default About;
