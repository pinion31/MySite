import React from 'react';

const Intro = () => {
  return (
    <div>
      <div className='intro'>
         <h1 className='name-title'>Chris Cantu</h1>
         <h1 className='job-title'>Web Developer</h1>
      </div>
      <div className='menu-box'>
        <div className='link-box'>
          <h1>My Work</h1>
        </div>
        <div className='link-box'>
          <h1>About Me</h1>
        </div>
        <div className='link-box'>
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
