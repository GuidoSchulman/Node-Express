import express, { request, response } from "express";
import config from './dbconfig.js';
import sql from 'mssql';
import Pizza from "./Models/pizza.js";
import PizzaService from './services/pizzas-services.js'
import cors from "cors";
import IngredienteService from "./services/ingredientes-services.js";

const app= express();
const port =3000;
const APIKEY="123456789";
app.use(cors())

app.use(express.static('public'))
app.use(express.json());

const horaMiddleware = function (req,res,next){
    let horaInicio= new Date().getTime()
    next()
    let horaRealizdo= new Date().getTime()
    let TiempoRealización = horaRealizdo-horaInicio
    console.log("Tardó: " + TiempoRealización+ " milisegundos");

}
const CheckApiKey = function (req,res,next){

    let key = req.get('ApiKey');
 
    console.log(APIKEY);
    console.log(key);
    if (APIKEY==key ){

        next()
    }
    else{
        res.status(401).send('Unauthorized, es necesario una ApiKey Valida.')
    }
}
const CreatedByMiddleware=function (req,res,next){
    const NombreAlumno="Guido"
    console.log(NombreAlumno);
    res.setHeader("CreatedBy", NombreAlumno)
    next()
}



app.use(CheckApiKey)
app.use(horaMiddleware)
app.use(CreatedByMiddleware)

app.get('/api/pizzas/:id', async(req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.getById(req.params.id);
    res.send(respuesta);
})

app.get('/api/pizzas/', async(req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.getAll();
    res.send(respuesta);
})

app.delete('/api/pizzas/delete/:id', async (req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.deleteById(req.params.id);
    res.send(respuesta);
})

app.post('/api/pizzas/insert', async(req,res)=>{
    let svc = new PizzaService();
   let cuerpo=req.body
   console.log(cuerpo);
    let respuesta = await svc.insert(req.body);
    res.send(respuesta);
})
app.put('/api/pizzas/update', async (req,res)=>{
    let svc = new PizzaService();
    let respuesta = await svc.update(req.body);
    res.send(respuesta);
})

app.get('/api/pizzas/ingredientes/:id', async (req,res)=>{
    let svc= new IngredienteService();
    let respuesta = await svc.getIngredientes(req.params.id)
    console.log(respuesta);
    res.send(respuesta);
})
app.get('/api/pizzas/ingredientes/u/:id', async (req,res)=>{
    let svc= new IngredienteService();
    let respuesta = await svc.getUnIngrediente(req.params.id)
    console.log(respuesta);
    res.send(respuesta);
})



app.listen(port,()=>{
    console.log('example app listening on port '+ port)
})