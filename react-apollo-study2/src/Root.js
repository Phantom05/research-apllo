import React from 'react';

function Root(props) {
  const handleClick = config => {
    console.log('handelClick');
  };
  return <div onClick={handleClick}>Root</div>;
}

export default Root;
