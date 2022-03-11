/*
 * @Author: your name
 * @Date: 2022-03-09 16:09:55
 * @LastEditTime: 2022-03-11 15:50:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\counter.tsx
 */
import React from "react";
import { observer } from 'mobx-react-lite'
import { useStore } from '../mobx/index';
const CharacterCount: React.FC = () => {
    const { countStore } = useStore();
    const { count } = countStore;
    return <>Power number: {count * 2}</>;
}
export default observer(CharacterCount)