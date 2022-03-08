/*
 * @Author: your name
 * @Date: 2022-03-01 14:44:16
 * @LastEditTime: 2022-03-07 14:27:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \light\packages\react-light-cli\template\src\App.tsx
 */
import React from 'react';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="hello">
                    Hello Light Cli !
                </h1>
                <h3 className='page'>current page is <span><h2><%= pageName %></h2></span></h3>
            </header>
        </div>
    );
}

export default App;
