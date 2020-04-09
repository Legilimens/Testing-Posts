import React from 'react';
import classes from './ContentWrapper.module.css';

function ContentWrapper(props) {
  const { children } = props;
  return (
    <div className={classes.content}>
      {children}
    </div>
  );
}

export default ContentWrapper;
