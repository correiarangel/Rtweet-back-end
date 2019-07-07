const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

//conecxão com db endereço  
mongoose.connect(
    'mongodb+srv://meuuser:minhasenha@cluster0-yyy7.mongodb.net/teste?retryWrites=xxxx&w=majo',{
    useNewUrlParser:true,
})

app.use(( req, res , next)=> {
    req.io = io
    return next();
})

app.use(cors())
app.use(express.json())
app.use(require("./routes"))



server.listen(3030, () => {
    console.log('Sevidor do Ar porta 3030 !..')
})
