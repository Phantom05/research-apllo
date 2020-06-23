import React from 'react';
import { Helmet } from 'react-helmet';

const Page = ({ children, title, ...otherProps }) => (
  <>
    <Helmet title={`${title} — Custom`} />
    <div {...otherProps}>{children}</div>
  </>
);

export default Page;
