import express from 'express';
import { connection } from './utility/DBUtills.js';
import customerRouter from './Routers/customerRouter.js';
import cors from 'cors'
import propertyRouter from './Routers/propertyRouter.js';
const PORT = 6800
const app  = express();

app.use(cors());
app.use(express.json());
app.use("/customer", customerRouter );
app.use('/property', propertyRouter);
// app.use("/admin", adminRouter);


app.listen(PORT, ()=>{
    connection.connect((error)=>{
        if(error){
            console.log("Error in DB Connection");
            console.log(error);
        }
        else{
            console.log("database connected ")
        }
    })
    console.log(`server is running on port ${PORT}`);
})