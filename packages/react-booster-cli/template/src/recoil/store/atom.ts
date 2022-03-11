/*
 * @Author: your name
 * @Date: 2022-03-09 16:50:47
 * @LastEditTime: 2022-03-10 10:12:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\store.ts
 */

import { atom } from "recoil";

const countState  = atom({
    key: 'countState ', // unique ID (with respect to other atoms/selectors)
    default: 3, // default value (aka initial value)
});

export { countState  }