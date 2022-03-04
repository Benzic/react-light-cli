/*
 * @Author: your name
 * @Date: 2022-02-28 14:30:55
 * @LastEditTime: 2022-03-03 16:38:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \booster\packages\react-booster-cli\lib\check-verison.js
 */
const request = require("request");
const semver = require("semver");
const chalk = require("chalk");
const packageConfig = require("../package.json");

module.exports = function checkVersion() {
  return new Promise((resolve, reject) => {
    if (!semver.satisfies(process.version, packageConfig.engines.node)) {
      return console.log(
        chalk.red(
          `  You must upgrade node to >= ${packageConfig.engines.node} .x to use react-light-cli`
        )
      );
    }
    request({
        url: 'https://registry.npmjs.org/react-light-cli',
      }, (err, res, body) => {
        if (!err && res.statusCode === 200) {
          const latestVersion = JSON.parse(body)['dist-tags'].latest
          const localVersion = packageConfig.version
          if (semver.lt(localVersion, latestVersion)) {
            console.log()
            console.log(chalk.yellow('  A newer version of light-cli is available.'))
            console.log()
            console.log(`  latest:     ${chalk.green(latestVersion)}`)
            console.log(`  installed:  ${chalk.red(localVersion)}`)
            console.log()
          }
          resolve()
        }else{
          reject()
        }
      })
  });
};
