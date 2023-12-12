import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RatingCircle = ({ rating }) => (
  <div style={{ width: '40px' }}>
    <CircularProgressbar
      value={rating}
      text={`${rating}`}
      strokeWidth={12} 
      textSize={`25px`} 
      styles={buildStyles({
        textColor: '#000', 
        pathColor: '#8A2BE2', 
        trailColor: '#ddd',
      })}
    />
  </div>
);

export default RatingCircle;
