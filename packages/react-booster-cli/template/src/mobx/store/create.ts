/*
 * @Author: your name
 * @Date: 2022-03-10 17:48:13
 * @LastEditTime: 2022-03-11 10:56:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\mobx\index.ts
 */
import countStore from './store';
export function createStore() {
    return { countStore }
}
export const store = createStore();
export type TStore = ReturnType<typeof createStore>;