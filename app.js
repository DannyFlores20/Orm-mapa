const express = require('express');
const Sequelize = require('sequelize');
const path = require('path');
const db = require('./config/database');

db.authenticate()
.then(() => {
  console.log('Conectado  con sequelize');
})
.catch(err => {
  console.error('error :(' + err);
});

const app = express();
app.use('/api',require ('./routes/ruta'));

const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send('conectado');
});

app.listen(port,()=>{
    console.log(`Puerto ${port}`);
});