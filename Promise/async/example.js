/**
 * 读取三个文件并输出
 */

const fs = require('fs')
const util = require('util')
const mineReadFile = util.promisify(fs.readFile)

async function main() {
    try {
        let data1 = await mineReadFile('../1-fs.js');
        let data2 = await mineReadFile('../2-ajax.html');
        let data3 = await mineReadFile('../3-file.js');
        console.log(data1 + data2 + data3)
    } catch (e) {
        console.log(e)
    }
}

main()