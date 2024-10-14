/**
 * useState是一个React Hook，它允许向组件添加一个状态变量，从而控制影响组件的渲染结果
 * 本质：和普通js变量不同的是，状态变量一旦发生改变，对应的组件的视图会重新渲染（数据驱动视图）
 * 原则：
 *  状态不可变：
 *      在react中，状态被认为是只读的，我们只能始终替换它(通过修改状态的方法）而不是修改它，直接修改状态不能引发视图更新
 */

import { useState } from "react"

function MyUseState() {
    //1.从react中调用useState创建一个状态变量，利用了js的解构赋值语法
    //count：状态变量，setCount：修改状态变量的方法的名字（自定义名字）
    const [count, setCount] = useState(0);  //简单类型

    const [form, setForm] = useState({
        name: 'Jack',
    })



    //2.点击事件回调函数
    const handleClick = () => {
        //setCount(count++),这样写没法更新视图，因为状态被修改了
        setCount(count + 1);
        console.log(count);
    }

    //对于对象类型，一般采用js里的展开语法
    const handleFormClick = () => {
        //setForm(form.name = 'john');
        let tempName;

        tempName = form.name == 'jack' ? 'john' : 'jack';
        setForm({
            ...form,
            name: tempName
        })
    }
    
    return (
        <div>
            <button onClick = {handleClick}>{count}</button>
            <button onClick = {handleFormClick}>{form.name}</button>
        </div>
    )
}

export default MyUseState;