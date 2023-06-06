
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
    <ul>${pizza.ingredientes}</ul>
    <br>
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



}
function InsertPizza(){
    let n= document.querySelector("#nombre").value
    let lg= document.querySelector("#libreGluten").checked
    let i= document.querySelector("#importe").value
    let d= document.querySelector("#descripcion").value
    let text = document.querySelector("#todas");
    const Pizza={
        Nombre:n,
        LibreGluten:lg,
        Importe:i,
        Descripcion:d


    }
    axios 
    .post("http://localhost:3000/api/pizzas/insert/",Pizza)
    .then(()=>{
        text.innerHTML=''
        text.innerHTML+= `
        <h1>Pizza Creada</h1>
        
        `;
    })
    .catch((error) => {

        console.log(error);
    })
}

function UpdatePizza(){
    let id=document.querySelector("#idUpdate").value
    let n= document.querySelector("#nombreUpdate").value
    let lg= document.querySelector("#libreGlutenUpdate").checked
    let i= document.querySelector("#importeUpdate").value
    let d= document.querySelector("#descripcionUpdate").value
    let text = document.querySelector("#todas");
    const Pizza={
        Id:id,
        Nombre:n,
        LibreGluten:lg,
        Importe:i,
        Descripcion:d


    }
    axios 
    .put("http://localhost:3000/api/pizzas/update/",Pizza)
    .then(()=>{
        text.innerHTML=''
        text.innerHTML+= `
        <h1>Pizza Actualizada</h1>
        
        `;
    })
    .catch((error) => {

        console.log(error);
    })
}

