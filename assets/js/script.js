
const cambios = ["uf","dolar","dolar_intercambio","euro","utm"]
const listaMonedas = document.querySelector(".moneda")
const espacioResultado = document.querySelector(".resultado")

const apiURL = "https://mindicador.cl/api"

//obtener opciones y llenar el select
//traer 4 conversiones 
//usar try catch
async function obtenerMonedas(){
    try{
        const result = await fetch(apiURL);
        const data = await result.json();
        var mon = [];
        cambios.forEach((element) => {
            mon.push(data[element])
        });

        let innerHTML = ''
        mon.forEach((element) => {
            innerHTML += `<option value='{"moneda":["${element.codigo}","${element.nombre}",${element.valor}]}'>${element.nombre}</option>`            
        });
        listaMonedas.innerHTML = innerHTML;
        
    }
    catch(e){
        //cargar lista desde json miindicador.json
        console.log("Error al obtener la lista de monedas")
    } 
}
//calcular el cambio al seleccionar y actualizar el DOM
//tambien actualizar la gráfica
//usar try catch
async function convertir(){
    try{
        //recuperar pesos ingresados
        let pesos = document.querySelector(".pesos");
        //recuperar moneda seleccionada
        let seleccion = JSON.parse(listaMonedas.value)
        //TODO:validar si el campo Pesos no está vacío  o no hay selección

        espacioResultado.innerHTML ='$'.concat((Number(pesos.value) / seleccion.moneda[2]).toFixed(2))

        
    }
    catch(e){
        //convertir desde el json miindicador.json
        console.log('Error al buscar la conversión')
    }
}

//llamada inicial
obtenerMonedas()
//********************************************************* */
// //fijar varaibles
// const usuarios = document.querySelector(".usuarios")
// const apiURL = "https://jsonplaceholder.typicode.com/users"

// //obtener datos
// async function getUsers(){
//     const result = await fetch(apiURL)
//     const data = await result.json()
//     return data;
// }

// //llenar html
// async function renderUsuarios(){
//     let innerHTML = "";
//     const dataUsers = await getUsers();
//     dataUsers.forEach((usuario) => {
//         innerHTML += `<div class='usuario'>
//                         <h3>${usuario.name}</h3>
//                         <h4>${usuario.email}</h4>
//                         <h4>${usuario.phone}</h4>    
//                     </div>`
//     });
//     usuarios.innerHTML = innerHTML;
// }

// renderUsuarios();

// async function getRandomUser() {
//     const res = await fetch("https://randomuser.me/api")
//     const data = await res.json()
//     console.log(data)
//     const element = document.querySelector(".user")
//     element.innerHTML = data.results[0]["email"]
// }
// getRandomUser()

// const climasSection = document.querySelector(".climas")
// const apiURL = "https://api.gael.cloud/general/public/clima"

// async function getClimas(){
//     const res = await fetch(apiURL);
//     const climas = await res.json();
//     return climas;
// }

// async function renderClimas(){
//     const climas = await getClimas();
//     let template = "";
    
//     climas.forEach((clima) => {
//         template += `<div class='clima'>
//                         <h3>${clima.Estacion}<h3>
//                         <p>${clima.Temp}</p>
//                     </div>`
//     });

//     climasSection.innerHTML = template;
// }

// renderClimas();