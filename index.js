import express from "express";
import config from './dbconfig.js';
import sql from 'mssql';
import Pizza from "./Models/pizza.js";
import PizzaService from './services/pizzas-services.js'


const app= express();
const port =3000;
app.use(express.json());
app.get('/:id', (req,res)=>{
    let svc = new PizzaService();
    let respuesta = svc.getById(req.params.id);
    res.send(respuesta);
})

app.get('/', (req,res)=>{
    let svc = new PizzaService();
    let respuesta = svc.getAll();
    res.send(respuesta);
})

app.get('/delete/:id', (req,res)=>{
    let svc = new PizzaService();
    let respuesta = svc.deletById(req.params.id);
    res.send(respuesta);
})

app.post('/insert',(req,res)=>{
    let svc = new PizzaService();
    let respuesta = svc.insert(req.body);
    res.send(respuesta);
})
app.put('/update',(req,res)=>{
    let svc = new PizzaService();
    let respuesta = svc.update(req.body);
    res.send(respuesta);
})

app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})