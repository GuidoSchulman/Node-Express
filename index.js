import express from "express";
import config from './dbconfig.js';
import sql from 'mssql';
import PizzaService from './services/pizzas-services.js'


const app= express();
const port =3000;

app.get('/:id', (req,res)=>{
    let svc = new PizzaService();
    let respuesta = svc.getById(req.params.id);
    res.send(respuesta);
})

app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})