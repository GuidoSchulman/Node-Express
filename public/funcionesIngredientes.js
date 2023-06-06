
function ConseguirIngredientes() {
    let id = document.querySelector("#idIngredientes").value
    
    axios
        .get("http://localhost:3000/api/pizzas/ingredientes/" + id)
        .then((result) => {
            console.log(result.data);
            mostrarIngredientes(result.data)
        })
        .catch((error) => {

            console.log(error);
        })
}
function mostrarIngredientes(ingredientes) {

    let text = document.querySelector("#todas");
    
        text.innerHTML = ''

        ingredientes.foreach(ingrediente => {
        text.innerHTML += `
        <ul>${ingrediente.Nombre}</ul>
        <ul>${ingrediente.Id}</ul>
        `;
        });
        
}

function ConseguirIngredientesPorId(){
    let id=document.querySelector("#idBuscarIngrediente").value
    let text = document.querySelector("#todas");
    axios
    .get("http://localhost:3000/api/pizzas/ingredientes/u/"+id)
    .then((result)=>{
        console.log(result.data);
        text.innerHTML = ''
        text.innerHTML += `
        <ul>${result.data.Nombre}</ul>
        <ul>${result.data.Id}</ul>
        `;
    })
    .catch((error) => {

        console.log(error);
    })
}




