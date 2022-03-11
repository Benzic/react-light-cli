/*
 * @Author: your name
 * @Date: 2022-03-09 16:09:55
 * @LastEditTime: 2022-03-10 15:10:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\counter.tsx
 */
import React from "react"
import { Button } from "antd"
import { useRecoilState } from "recoil";
import { countState } from "../store/atom";

const Counter: React.FC = () => {
    const [number, setNumber] = useRecoilState(countState);
    const onAddNumber = () => {
        setNumber((prev) => prev + 1)
    };
    const onDecNumber = () => {
        setNumber((prev) => prev - 1)
    };
    return <>
        <div> 当前：{number}</div>
        <Button onClick={onAddNumber}>增加</Button>
        <Button onClick={onDecNumber}>减少</Button>
    </>
}
export default Counter