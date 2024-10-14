/**
 * React组件
 * 在React中，一个组件就是首字母大写的函数，内部存放了组件的逻辑和视图UI，渲染组件只需要把组件当成标签书写即可;
 * 这个组件即可以是普通函数，也可以是箭头函数；
 * return只能是一个块级元素；
 */

/**
 * 箭头函数
 * @returns MyButton
 */
const MyButton = () => {
    return <button>click me</button>
}

/**
 * 普通函数
 * @returns MyButton
 */
/*
function MyButton() {
    return <button>click me</button>
}
*/


export default MyButton;