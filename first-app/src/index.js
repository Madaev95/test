import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <table>
    <tr>
      <td> <Test name = 'Mago' phone = '8963 001-01-01'/> </td>
    </tr>
    <tr>
      <td> <Test2 name = 'Islam' phone = '8963 002-02-02'/> </td>
    </tr>
  </table>
);

function Test(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.phone}</span>
    </div>
  )
}

function Test2(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.phone}</span>
    </div>
  )
}