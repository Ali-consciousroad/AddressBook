const express = require('express')//Initialize express app
const app = express();//Initialize the sever
app.listen(3000, () => {
    console.log('sever listening on port:3000');
});
