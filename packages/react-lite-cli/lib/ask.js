/*
 * @Author: your name
 * @Date: 2022-02-28 14:38:02
 * @LastEditTime: 2022-02-28 14:40:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\packages\react-booster-cli\lib\ask.js
 */
const { prompt } = require("inquirer");
const questions = [
  {
    name: "platform",
    type: "list",
    message: "您的web应用需要运行在哪个端呢?",
    choices: [
      {
        name: "PC端",
        value: "pc",
      },
      {
        name: "移动端",
        value: "mobile",
      },
    ],
  },
  {
    name: "isMPA",
    type: "list",
    message: "生成单页or多页模版?",
    choices: [
      {
        name: "单页（SPA）",
        value: false,
      },
      {
        name: "多页（MPA）",
        value: true,
      },
    ],
  },
  {
    name: "stateLibrary",
    type: "list",
    message: "您希望安装的状态管理库是?",
    choices: [
      {
        name: "mobx",
        value: "mobx",
      },
      {
        name: "redux",
        value: "redux",
      },
    ],
  },
  {
    name: "reactRouterVersion",
    type: "list",
    message: "选择react-router版本",
    choices: [
      {
        name: "v5（推荐）",
        value: "v5",
      },
      {
        name: "v6（对hook支持度较好,但api不够稳定）",
        value: "v6",
      },
    ],
  },
];
module.exports = function ask() {
  return prompt(questions);
};
