import React from 'react';

const Avatar = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(2,0,36);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(0,212,255);stop-opacity:1" />
        </linearGradient>
        <clipPath id="hexClip">
          <polygon points="100,10 190,75 190,175 100,240 10,175 10,75"/>
        </clipPath>
      </defs>
      <style>
        .border {
          stroke: url(#grad1);
          stroke-width: 4;
          fill: none;
        }
        .shadow {
          filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
        }
      </style>
      <polygon points="100,10 190,75 190,175 100,240 10,175 10,75" class="border shadow"/>
      <image href="/avatar.png" x="25" y="25" height="150" width="150" clip-path="url(#hexClip)"/>
    </svg>
  );
};

export default Avatar;
