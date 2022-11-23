const fs = require('fs');

const logMiddleware = (req,res,next)=>{
    const date = new Date()
    fs.appendFileSync('./logs/mainLog.txt',`se ingreso a: ${req.url} en la fecha: ${date} \r\n`)

    next();
}

module.exports = logMiddleware