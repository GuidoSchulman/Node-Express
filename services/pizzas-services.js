import config from './../dbconfig.js';
import sql from 'mssql';

export default class PizzaService {
    
    getAll = async () => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.getAll()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .query('SELECT pizzas.*, Ingredientes.Nombre  AS Ingredientes FROM IngredientesXPizzas INNER JOIN Ingredientes on IngredientesXPizzas.IdIngrediente =Ingredientes.Id  INNER JOIN Pizzas on IngredientesXPizzas.IdPizza =Pizzas.id');
            returnEntity = result.recordset;
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: PizzaService.GetById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('SELECT * FROM Pizzas Where id = @pId');
            returnEntity = result.recordsets[0][0];
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
    insert = async (pizza) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.insert(pizza)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pNombre',sql.VarChar,pizza.Nombre)
            .input('pLibreGluten',sql.Bit,pizza.LibreGluten)
            .input('pImporte',sql.Float,pizza.Importe)
            .input('pDescripcion',sql.VarChar,pizza.Descripcion)
            .query('INSERT [dbo].[Pizzas] ( [Nombre], [LibreGluten], [Importe], [Descripcion]) VALUES (@pNombre,@pLibreGluten,@pImporte,@pImporte)')
            rowsAffected = result.rowsAffected
        }catch(error){
            console.log(error);

        }
    return rowsAffected;
    }
    
    update = async (pizza) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.update(pizza)');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId',sql.Int,pizza.Id)
            .input('pNombre',sql.VarChar,pizza.Nombre)
            .input('pLibreGluten',sql.Bit,pizza.LibreGluten)
            .input('pImporte',sql.Float,pizza.Importe)
            .input('pDescripcion',sql.VarChar,pizza.Descripcion)
            .query('UPDATE [dbo].[Pizzas] SET [Nombre]=@pNombre,[LibreGluten]=@pLibreGluten, [Importe]=@pImporte, [Descripcion]=@pImporte WHERE Id=@pId')
            rowsAffected = result.rowsAffected
        }catch(error){
            console.log(error);

        }
    return rowsAffected;
    }
    deleteById = async (id) => {
        let rowsAffected = 0;
        console.log('Estoy en: PizzaService.deleteById(id)');
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .input('pId', sql.Int, id)
                .query('DELETE FROM Pizzas WHERE id=@pId')
            rowsAffected = result.rowsAffected;


        } catch (error) {
            console.log(error);
        }
        return rowsAffected
    }
}
