/**
 * useState是一个React Hook，它允许向组件添加一个状态变量，从而控制影响组件的渲染结果
 * 本质：和普通js变量不同的是，状态变量一旦发生改变，对应的组件的视图会重新渲染（数据驱动视图）
 */

import { useState } from "react"

function MyUseState() {
    //1.从react中调用useState创建一个状态变量，利用了js的解构赋值语法
    //count：状态变量，setCount：修改状态变量的方法的名字（自定义名字）


    //2.点击事件回调函数
    const handleClick = () => {
        setCount(count + 1);
    }
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick = {handleClick}>{count}</button>
        </div>
    )
}

export default MyUseState;