/**
 * React中组件基础的样式控制有两种，一种是行内样式，一种是className
 */

//导入样式文件
import '../index.css';
import './day01.css';


function CssGrammar() {

    const myStyle = {
        color: 'blue',
        fontSize: '20px'
    }


    return (
        <div>
            {/* 行内样式控制, 属性用驼峰样式 */}
            {/*<div style={{color: 'red',fontSize: '20px'}}> this is a div</div> */}
            <div style={myStyle}> this is a div</div>


            <div className='foo top'>this is a class foo</div>
        </div>
    )
}

export default CssGrammar;