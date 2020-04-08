import React from 'react';
import { useSelector } from 'react-redux';

function Alert() {
  const alert = useSelector((store) => store.app.alert);

  if (alert) {
    return (
      <div className="alert alert-warning" role="alert">
        {alert}
      </div>
    );
  }

  return '';
}

export default Alert;
