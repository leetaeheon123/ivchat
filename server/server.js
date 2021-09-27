const express = require('express');
// express라는 모듈을 가져와서
const app = express();
// app에 담아준다.

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=> {
    res.send('ㅋㅋ');
})

app.listen(PORT, () => {
    console.log('Server on');
})
