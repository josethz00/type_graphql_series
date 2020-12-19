import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB!,  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MONGODB CONNECTED'));