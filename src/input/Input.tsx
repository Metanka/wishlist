import React from 'react';
import './Input.css';

function Input() {
  return (
    <form className="input-box">
      <input className="input" type="text"></input>
      <button className="input-btn" type="submit">Добавить</button>
    </form>
  );
}

export default Input;