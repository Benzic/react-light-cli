/*
 * @Author: your name
 * @Date: 2022-03-10 15:53:20
 * @LastEditTime: 2022-03-11 17:25:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\zustand\store\index.ts
 */
import create from 'zustand'
const countState = create((set: any) => ({
    count: 12,
    addCount: () => set((prev: any) => ({ count: prev.count + 1 })),
    decCount: () => set((prev: any) => ({ count: prev.count - 1 })),
}))
export { countState }