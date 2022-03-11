/*
 * @Author: your name
 * @Date: 2022-03-09 17:22:14
 * @LastEditTime: 2022-03-10 10:46:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\store\selector.ts
 */
import { selector } from "recoil";
import { countState } from "./atom";
const powerState = selector({
    key: 'powerState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const number = get(countState);
        return number * 2;
    },
});
export { powerState }