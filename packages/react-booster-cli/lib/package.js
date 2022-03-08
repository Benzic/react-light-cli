/*
 * @Author: your name
 * @Date: 2022-02-28 14:42:09
 * @LastEditTime: 2022-03-07 14:27:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \light\packages\react-light-cli\lib\generate.js
 */
const eslint = {
  eslint: "^7.5.0",
  "eslint-config-airbnb": "^18.2.1",
  "eslint-config-react-app": "^6.0.0",
  "eslint-plugin-flowtype": "^5.10.0",
  "eslint-plugin-import": "^2.22.0",
  "eslint-plugin-jsx-a11y": "^6.3.1",
  "eslint-plugin-react": "^7.20.3",
  "eslint-plugin-react-hooks": "^4.0.8",
  "eslint-webpack-plugin": "^3.0.1",
};
const typeScirpt = {
  "@types/lodash": "^4.14.175",
  "@types/react": "^17.0.27",
  "@types/react-dom": "^17.0.9",
  "@typescript-eslint/eslint-plugin": "^5.1.0",
  "@typescript-eslint/parser": "^5.1.0",
  typescript: "^4.4.3",
};
/**
 * @name 根据选项生成对应的package
 * @param {*} answers 收集的问题
 * @returns 文件树 eg { '/path/a/b' : 文件内容 }
 */
async function package(answers, pkg) {
  const {
    platform,
    useImmer,
    useHooks,
    useEslint,
    useTypescript,
    stateLibrary,
    reactRouterVersion,
  } = answers;
  pkg.dependencies[stateLibrary] = "latest";
  if (platform === "mobile") {
    pkg.devDependencies["postcss-pxtorem"] = "^6.0.0";
    pkg.dependencies["lib-flexible"] = "^0.3.2";
  } else if (platform === "pc") {
    pkg.dependencies["antd"] = "latest";
  }
  if (useHooks) {
    pkg.devDependencies["ahooks"] = "^3.1.13";
  }
  if (useImmer) {
    pkg.devDependencies["use-immer"] = "^0.6.0";
  }
  if (useEslint) {
    for (let k in eslint) {
      pkg.devDependencies[k] = eslint[k];
    }
  }
//   if (useTypescript) {
//     for (let j in typeScirpt) {
//       pkg.devDependencies[j] = eslint[j];
//     }
//   }
  if (reactRouterVersion === "v5") {
    pkg.devDependencies["react-router"] = "5.1.2";
  } else if (reactRouterVersion === "v6") {
    pkg.dependencies["react-router"] = "^6.x";
  }
  return pkg
}

module.exports = package;
