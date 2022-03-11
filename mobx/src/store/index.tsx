/*
 * @Author: your name
 * @Date: 2022-03-11 11:17:38
 * @LastEditTime: 2022-03-11 15:39:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\mobx\index.tsx
 */
import React from 'react';
import { createStore, TStore } from './create';
import { useLocalStore } from 'mobx-react-lite';
const storeContext = React.createContext<TStore | null>(null);
export const StoreProvider = ({ children }: any) => {
    const store = useLocalStore(createStore);
    return <storeContext.Provider value={store}> {children} </storeContext.Provider>
}
export const useStore = () => {
    const store = React.useContext(storeContext);
    return store
}