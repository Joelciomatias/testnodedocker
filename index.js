const express =  require('express')

const HOST = '0.0.0.0'
const PORT = 3000

const app = express();

app.get('/',(req,res)=>{
    res.send("hello from express 2");
})

app.listen(PORT,HOST,()=>{
    console.log(`The node app is listen on port: ${PORT}`)
})
