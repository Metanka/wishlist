import React from 'react';
import './List.css';

function List() {
  return (
    <div className="list">
      <div className="list-item__box">
        <p className="list-item">Шпильполбанованная колдоперемуторка</p>
        <button type="button" className="list-item__delete"></button>
      </div>
      <div className="list-item__box">
        <p className="list-item">Шпильполбанованная колдоперемуторка</p>
        <button type="button" className="list-item__delete"></button>
      </div>
      <div className="list-item__box">
        <p className="list-item">Шпильполбанованная колдоперемуторка</p>
        <button type="button" className="list-item__delete"></button>
      </div>
    </div>
  );
}

export default List;