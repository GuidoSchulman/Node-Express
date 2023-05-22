

function LlamarGetAll()
{
    axios
    .get("http://localhost:3000/api/pizzas/")
    .then((result)=>{
        console.log(result.data);
        mostrarPizzas(result.data)
        
    })
    .catch((error)=>{
        console.log(error);
    })

}
function mostrarPizzas(ListaPizzas){
let text = document.querySelector("#todas");
ListaPizzas.map((pizza)=>{
    text.innerHTML+=  `
    <ul>${pizza.Id}</ul>
    <ul>${pizza.Nombre}</ul>
    <ul>${pizza.LibreGluten}</ul>
    <ul>${pizza.Importe}</ul>
    <ul>${pizza.Descripcion}</ul>
    `;

})
}

function LlamarGetById(){
    let id=document.querySelector("#id")
    axios
    .get("http://localhost:3000/api/pizzas/"+ id)
    .then ((result)=>{
        console.log(result.data.results);
        mostrarUnaPizza(result)
    })
    .catch((error)=>{
        console.log(error);
    })
}
function mostrarUnaPizza(pizza)
{
    console.log(pizza);
    let text = document.querySelector("#todas");
    text.innerHTML+=  `
    <ul>${pizza.Id}</ul>
    <ul>${pizza.Nombre}</ul>
    <ul>${pizza.LibreGluten}</ul>
    <ul>${pizza.Importe}</ul>
    <ul>${pizza.Descripcion}</ul>
    `;
}
