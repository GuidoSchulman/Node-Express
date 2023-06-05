import config from './../dbconfig.js';
import sql from 'mssql';

export default class IngredienteService {
    
    getIngredientes = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: IngredienteService.getIngredientes()');
        try{
            let pool = await sql.connect(config);
            let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT Ingredientes.* FROM IngredientesXPizzas INNER JOIN Ingredientes on IngredientesXPizzas.IdIngrediente =Ingredientes.Id where IngredientesXPizzas.IdPizza=@pId');
            returnEntity = result.recordset;
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }
}
