const express = require('express');
// express라는 모듈을 가져와서
const app = express();
// app에 담아준다.

const PORT = process.env.PORT || 4000;

const mysql = require("mysql");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "xogjs0504", //mysql의 password
    database : "reactin", //사용할 데이터베이스
});

connection.connect();
var AK
connection.query("SELECT * FROM person", function (error, result, fields) {
    if(error) throw error;
    AK = result[0].Text;
    console.log(typeof(AK))
    if(AK == 'Love you'){
        console.log('Hello')
    }
    connection.end();
});


app.get('/api/host', (req, res)=> {
    res.send({ host : 'Taeheon' , kate : AK });
})

app.listen(PORT, () => {
    console.log('Server on');
})
