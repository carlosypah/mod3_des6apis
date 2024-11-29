const cambios = ["uf","dolar","dolar_intercambio","euro","utm"];
const listaMonedas = document.querySelector(".moneda");
const espacioResultado = document.querySelector(".resultado");

const apiURL = "https://mindicador.cl/api";

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

async function actualizarGraficaMoneda(codigo, nombre){
    const res = await
    fetch("https://mindicador.cl/api/"+codigo);
    const dias = await res.json();
    const labels = dias.serie.slice(0,10).reverse().map((dia) => {
        const auxFecha = new Date(dia.fecha)
        const label = `${auxFecha.getFullYear()}-${auxFecha.getMonth()}-${auxFecha.getDate()}`
        return label
    });
    const data = dias.serie.slice(0,10).reverse().map((dia) => {
        return dia.valor;
    });
    const datasets = [
    {
        label: nombre+": Historial últimos 10 días",
        borderColor: "rgb(58, 147, 168)",
        data
    }
    ];
    return { labels, datasets };
}

async function renderGrafica(codigo, nombre) {
    try{
    const data = await actualizarGraficaMoneda(codigo, nombre);
        const config = {
        type: "line",
        data
        };
        debugger
        let oldChart = Chart.getChart("myChart") 
        if(oldChart)
        {
            oldChart.destroy();
        }
        const myChart = document.getElementById("myChart");
        myChart.style.backgroundColor = "white";

        new Chart(myChart, config);
    }
    catch(e){
        console.log('Error al renderizar gráfica: '+ e)
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

        renderGrafica(seleccion.moneda[0], seleccion.moneda[1]);
    }
    catch(e){
        //convertir desde el json miindicador.json
        console.log('Error al buscar la conversión')
    }
}

//llamada inicial
obtenerMonedas()