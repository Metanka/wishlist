import React from 'react';
import './Task.css';

const Task = () => {
  return (
    <div className="list-item__box">
      <p className="list-item">Пожар</p>
      <button type="button" className="list-item__delete"></button>
    </div>
  );
};

export default React.memo(Task);