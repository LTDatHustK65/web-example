const express = require('express')
const app = express()
const path = require('path')

app.use('/public', express.static(path.join(__dirname, './src/public/')))

app.get('/', (req, res, next) =>{
    var pathFile = path.join(__dirname, './src/views/index.html')

    res.sendFile(pathFile)
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running `)
})
