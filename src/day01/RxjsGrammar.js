function RxjsGrammar() {

    const count = 100;

  const lsit = [
    {id: 1, name: 'Value'},
    {id: 2, name: 'Ract'},
    {id: 3, name: 'Angular'}
  ]

  const isLogin = true;

  const clickHandler = (e1,e2) => {
    alert('button clicked!' + e1 + e2);

  }

  return (
        /*JSX语法
    优势：
      HTML的声明式模板写法
      JS的可编程能力

    JSX本质：
      JSX并不是标准的JS语法，它是JS的语法扩展，浏览器本身不能识别，需要借助解析工具（babel）解析之后才能在浏览器中运行(babeljs.io---> try it out)
    */
    <div className="App">
      {/**
       * 1. JSX中使用JS表达式
       *  可以通过{}识别JS中的表达式，比如变量、函数调用、方法调用、JS对象等
       * 注意：{}只能识别表达式，不能识别语句，例如if，swithch，变量声明等
       */}
      {/*使用引号传递字符串*/}
      {'this is a string'}
      {/* 识别js变量 */}
      {count}
      {/*函数调用*/}
      {getName()}
      {/*方法调用*/}
      {new Date().getDate()}
      {/*使用JS对象*/}
      <div style={{color: 'red'}}>this is a div</div>



      {/**
       * JSX中实现列表渲染
       * 主要是通过map方法遍历渲染列表,每一个item要传递一个独一无二的key，string或者number
       * key是react框架内部使用的，提升更新性能
       */}
      <ul>
        {lsit.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>



      {/**
       * JSX中的条件渲染
       * 在React中，可以通过使用逻辑与运算符&&，或者通过三元表达式实现基础条件渲染
       * 
       */}
       {isLogin && <span>user has been logon!</span>}
       {isLogin ? <span>jack</span> : <span>loading...</span>}
       {getArticleTemplate(3)}



      {/**
      * React基础事件绑定
      * 语法： on + eventName = {functionName}
      * 关于事件参数，由于React会直接调用=右边的函数(如果这个函数可以接受参数，react会自动将event参数传进去），所以如果手动传递参数时，=右边要要定义一个匿名函数
      */}
      <button onClick={clickHandler}>默认事件参数</button>
      <button onClick={() => clickHandler('111111')}>自定义事件参数</button>
      <button onClick={(e) => clickHandler('22222',e)}>自定义事件参数+event</button>

    </div>
  )
    
}

export default RxjsGrammar;

function getName() {
    return 'Larry';
}
  
function getArticleTemplate(articleType) {
    if(articleType === 0) {
        return <div>我是无图模式</div>
    }else if(articleType === 1) {
        return <div>我是单图模式</div>
    } else {
        return <div>我是三图模式</div>
    }
}