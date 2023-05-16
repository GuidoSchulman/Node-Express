import express from "express";
import config from './dbconfig.js';
import sql from 'mssql';
import Pizza from "./Models/pizza.js";
import PizzaService from './services/pizzas-services.js'
import cors from "cors";

const app= express();
const port =3000;
app.use(cors())

app.use(express.static('public'))
app.use(express.json());

app.get('/:id', async(req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.getById(req.params.id);
    res.send(respuesta);
})

app.get('/', async(req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.getAll();
    res.send(respuesta);
})

app.get('/delete/:id', async (req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.deletById(req.params.id);
    res.send(respuesta);
})

app.post('/insert', async(req,res)=>{
    let svc = new PizzaService();
   
    let respuesta = await svc.insert(req.body);
    res.send(respuesta);
})
app.put('/update', async (req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.update(req.body);
    res.send(respuesta);
})

app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})