//array donde se cargarán los datos recibidos:
let listaAutosArray = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function mostrarListaAutos(array){
    let htmlContentToAppend = "";
    console.log(array);
    for(let i = 0; i < array.products.length; i++){ 
        let auto = array.products[i];
        htmlContentToAppend +=  `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name  +`</h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.cost + ` ` + auto.currency + `  </small> 
                        <small class="text-muted">` + auto.soldCount + ` cantidad vendidos</small>

                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("autos-list-container").innerHTML = htmlContentToAppend; 
    }
}


/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(AUTOS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            listaAutosArray = resultObj.data;
            mostrarListaAutos(listaAutosArray);
        }
    });
});