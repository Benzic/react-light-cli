/*
 * @Author: your name
 * @Date: 2022-03-09 16:09:55
 * @LastEditTime: 2022-03-11 14:27:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\counter.tsx
 */
import React from "react"
import { Button } from "antd"
import { observer } from 'mobx-react-lite'
import { useStore } from '../mobx/index';
const Counter: React.FC = () => {
    const { countStore } = useStore();
    const { addCount, decCount, count } = countStore
    console.log(count, addCount, decCount, countStore)
    return <>
        <div> 当前：{count}</div>
        <Button onClick={()=>{
            addCount()
            console.log(count)
        }}>增加</Button>
        <Button onClick={decCount}>减少</Button>
    </>
}
export default observer(Counter)