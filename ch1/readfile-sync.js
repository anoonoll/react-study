const fs = require('fs')

// ---同期的にファイルを読み込む---
const data = fs.readFileSync('kakugen.txt', 'utf-8')
console.log(data)

// ---非同期でファイルを読み込む---
fs.readFile('kakugen.txt', 'utf-8', reaHandler)
//読み込みが完了した時の処理
function reaHandler (err, data) {
    console.log(data)
}