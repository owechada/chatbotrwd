import messagecontroller from "./controler/messagecontroller.js"
import homecontroller from "./controler/homecontrolller.js"
import bodyParser  from 'body-parser';  
import  express from 'express'

const app=express()
app.use(bodyParser.json())


app.post('/message',messagecontroller)
app.get('/',homecontroller)

app.listen(5421,()=>{
console.log('listening on port 5421')

})



