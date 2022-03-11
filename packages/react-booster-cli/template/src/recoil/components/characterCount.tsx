/*
 * @Author: your name
 * @Date: 2022-03-09 16:09:55
 * @LastEditTime: 2022-03-10 15:10:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\counter.tsx
 */
import React from "react"
import { useRecoilValue } from "recoil";
import { powerState } from "../store/selector";
const CharacterCount: React.FC = () => {
    const number = useRecoilValue(powerState);
    return <>Power number: {number}</>;
}
export default CharacterCount