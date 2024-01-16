import messagecontroller from "./controler/messagecontroller.js"
import homecontroller from "./controler/homecontrolller.js"
import bodyParser  from 'body-parser';  
import  express from 'express'
import cors from 'cors'

const app=express()
app.use(bodyParser.json())

app.use(cors())
app.post('/message',messagecontroller)
app.get('/',homecontroller)

app.listen(5421,()=>{
console.log('listening on port 5421')

})



