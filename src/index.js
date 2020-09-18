import React from 'react';
import ReactDOM from 'react-dom';

import { NewButton } from './components'

const ele = (
  <div>
    <h3>Hello React!</h3>
    <NewButton name="这是一个按钮" />
  </div>
)

// jsx: javascript+xml  虚拟DOM  语法糖
ReactDOM.render(ele, document.getElementById('root'))