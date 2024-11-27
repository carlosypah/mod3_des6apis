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