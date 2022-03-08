/*
 * @Author: your name
 * @Date: 2022-02-28 15:00:49
 * @LastEditTime: 2022-03-07 14:27:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \light\packages\react-light-cli\lib\util\run.js
 */
const execa = require("execa");
module.exports = function run(command, args) {
  if (!args) {
    [command, ...args] = command.split(/\s+/);
  }
  return execa(command, args);
};
