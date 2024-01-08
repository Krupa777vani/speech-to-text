// const json={id:1,name:"js"};
// console.log("hello world",json.id);
// const arrjson=[1,2,3,4];
// arrjson[0]=0;

// console.log(arrjson)
// let arrjson2=[{id:1,name:"js"},{id:2,name:"java"}];
// console.log(arrjson2)
// arr=arrjson2.concat(arrjson);
// console.log(arr)
// for(let i=0;i<arrjson2.length;i++)
// {
   
//         console.log(arrjson2[i].name);
    
// }

// arrjson2.forEach((element,index) => {
//     console.log(element.name,index);
// });
// arrjson2.map((element,index)=>{
// console.log(element.name,index)
// }
// );

// delete json.name;
// json.age=20;
// console.log(json)



const express = require('express')
const app = express();
const mongoose =require('mongoose')
const cors = require('cors')



app.use(cors())
app.use(express.json())
// app.get('/',(req,res)=>{res.send("hello from server..")})
const Db = async()=>{
    try {
        await mongoose.connect('mongodb+srv://krupavanivallepalli:uxrbk3Q0I3iY8yir@cluster0.wtwqxrq.mongodb.net/?retryWrites=true&w=majority').then(
            ()=>{
                console.log("Connected to DataBase...")
            }
        )
    } catch (error) {
        console.log("hello")
    }
}

Db();

app.listen(8001,()=>{console.log("Server is running on port 8001...")})