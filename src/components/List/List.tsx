import React from 'react';
import './List.css';
import Task from '../task/Task';
import {useSelector} from 'react-redux';
import {State} from '../../infrastructure/store/types';
import {actions} from '../../infrastructure/store/actions';

function List() {
  const purchases = useSelector((state: State) => state.purchases);

  const handleAddElement = () => {
    //сюда передавать текст и цену
    actions.addPurchase({})
  }
  return (
    <div className="list">
      {purchases.map(purchase => {
        return (<div>{purchase.text}</div>)
      })}
      <Task />
    </div>
  );
}

export default List;