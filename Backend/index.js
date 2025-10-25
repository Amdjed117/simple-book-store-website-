import express, { response } from 'express';
import { PORT , mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import bookRoute from './Routes/bookRoute.js'
import cors from 'cors'



const app = express();
app.use(express.json());
app.use(cors())
app.use('/books', bookRoute);

app.get('/', (request, response) => {
    console.log(`Received request from IP: ${request.ip}`);
    return response.status(200).send('Welcome To MERN Stack Tutorial');
});

mongoose.connect(mongoDBURL)
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`App is listening to port number ${PORT}`);
        });
        console.log('connected to the database');
    })
    .catch((err)=>{
        console.log(err);
    });

    