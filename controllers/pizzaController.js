import { Router } from "express";
import PizzaService from "../services/pizzas-services";

const router = Router();
const pizzaService=new PizzaService();

router.get('',async(req,res)=>{
    const pizzas = await pizzaService.getAll();
    return res.status(200).json(pizzas);
})

router.get('/:id',async (req,res)=>{
    const pizza = await pizzaService.getById(req.params.id);
    return res.status(200).json(pizza);
})

router.post('', async (req,res)=>{
    const pizza = await pizzaService.insert(req.body);
    return res.status(201).json(pizza);
})

export default router