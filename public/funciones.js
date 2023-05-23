
function LlamarGetAll() {
    axios
        .get("http://localhost:3000/api/pizzas/")
        .then((result) => {
            console.log(result.data);
            mostrarPizzas(result.data)

        })
        .catch((error) => {
            console.log(error);
        })

}
function mostrarPizzas(ListaPizzas) {
    let text = document.querySelector("#todas");

    text.innerHTML = ''

    ListaPizzas.map((pizza) => {

        text.innerHTML += `
    <ul>${pizza.Id}</ul>
    <ul>${pizza.Nombre}</ul>
    <ul>${pizza.LibreGluten}</ul>
    <ul>${pizza.Importe}</ul>
    <ul>${pizza.Descripcion}</ul>
    `;

    })
}

function LlamarGetById() {
    let id = document.querySelector("#id").value
    axios
        .get("http://localhost:3000/api/pizzas/" + id)
        .then((result) => {
            console.log(result.data);
            mostrarUnaPizza(result.data, id)
        })
        .catch((error) => {

            console.log(error);
        })
}
function mostrarUnaPizza(pizza, id) {


    let text = document.querySelector("#todas");
    if (pizza.Id != id) {

        text.innerHTML = ''
        text.innerHTML += `
            <h1>La pizza no existe</h1>
            
            `;
    }
    else {
        text.innerHTML = ''
        text.innerHTML += `
        
        <ul>${pizza.Id}</ul>
        <ul>${pizza.Nombre}</ul>
        <ul>${pizza.LibreGluten}</ul>
        <ul>${pizza.Importe}</ul>
        <ul>${pizza.Descripcion}</ul>
        `;
    }

}

function EliminarPizza() {
    let id = document.querySelector("#idElim").value

    let text = document.querySelector("#todas");
    axios
        .delete("http://localhost:3000/api/pizzas/delete/" + id)
        .then((result) => {
            if (result.data == 1) {
                console.log(result.data);
                text.innerHTML = ''
                text.innerHTML += `
<h1>Pizza eliminada</h1>

`;
            }
            else {
                text.innerHTML = ''
                text.innerHTML += `
            <h1>Pizza no existe</h1>
            
            `;
            }
        })


    /*
            .get("http://localhost:3000/api/pizzas/")
            .then((result) => {
                console.log(result.data);
                listaPizzas = result.data
                
                listaPizzas.map((pizza) => {
                    console.log(pizza.id);
                    if (pizza.Id == id) {
                       
                        
                    }
                    else(
                        pizzaElim= false
                    )
                    
                })
                console.log(pizzaElim);
                if (pizzaElim ==false) {
                    let text = document.querySelector("#todas");
                    text.innerHTML = ''
                    text.innerHTML += `
                <h1>La pizza no existe</h1>
                
                `;
                }
            })
            .catch((error) => {
                console.log(error);
            })
    
    */

}