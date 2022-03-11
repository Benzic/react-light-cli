/*
 * @Author: your name
 * @Date: 2022-03-09 16:09:55
 * @LastEditTime: 2022-03-10 17:12:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\counter.tsx
 */
import React from "react"
import { Button } from "antd"
import { countState } from "../store";

const Counter: React.FC = () => {
    const number = countState(state => state.count)
    const onAddNumber = () => {
        countState?.getState().addCount()
    };
    const onDecNumber = () => {
        countState?.getState().decCount()
    };
    return <>
        <div> 当前：{number}</div>
        <Button onClick={onAddNumber}>增加</Button>
        <Button onClick={onDecNumber}>减少</Button>
    </>
}
export default Counter