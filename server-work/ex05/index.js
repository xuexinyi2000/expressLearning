var express = require('express');
var app = express();
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('./etc/user.json'))["user"]
console.log(data)

app.get('/time', function(req, res){
    var date = new Date();
    res.send(`当前时间：${date.toLocaleString()}`);
});

app.get('/user',function(req,res){
    let list = []
    data.forEach(user => {
        list.push(user['name'])
        // list = [user['name'],...list] 合并数组
        console.log(list)
    })
    res.send(list)
})

app.get('/phone/:id',function(req,res){
    let testStr = /^1[3456789]\d{9}$/
    let id = req.params.id
    if(testStr.test(id)){
        res.send('YES')
    }else {
        res.send('NO')
    }
})

// 错误处理路由
app.get('*', function(req, res){
    res.send('404. Sorry, this is an invalid URL.');
});

app.listen(8900);