import React from 'react';

function PlainTemplate(props) {
  const { header, children } = props;
  return (
    <>
      {header && header}
      {children && children}
    </>
  );
}

export default PlainTemplate;
