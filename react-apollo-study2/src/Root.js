import React from 'react';

function Root(props) {
  const handleClick = config => {
    console.log('handelClick');
    console.log(config, 'config');
    config?.hello;
  };
  return <div onClick={() => handleClick()}>Root</div>;
}

export default Root;
