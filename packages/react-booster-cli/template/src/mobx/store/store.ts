/*
 * @Author: your name
 * @Date: 2022-03-10 17:40:43
 * @LastEditTime: 2022-03-11 15:38:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\my-project\src\mobx\store.ts
 */
import { observable, action, makeObservable } from "mobx";
class countClass {
    @observable count: number = 0;
    constructor() {
        makeObservable(this)
    }
    @action.bound
    addCount = () => {
        this.count = this.count + 1
    };
    decCount = () => {
        this.count = this.count - 1
    };
}
const countStore: any = new countClass()
export default countStore