const express =  require('express')

const HOST = '0.0.0.0'
const PORT = 3000

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello from expres!");
})

app.listen(PORT,HOST,()=>{
    console.log(`The node app is listen on port: ${PORT} on server ${HOST}`)
})
