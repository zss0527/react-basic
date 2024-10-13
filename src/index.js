//项目的入口 从这里开始运行

//react必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目根组件
import App from './App';

import './index.css';
import reportWebVitals from './reportWebVitals';


//把App根组件渲染到id为root的dom结点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
