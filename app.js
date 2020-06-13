const URL = "https://api.breakingapi.com/news?type=headlines&category=business&locale=es-VE&api_key=78B08C6C45F04F32B83102604FD458DE";
const contenedorArticulos = document.querySelector("#contenedor");
let cuerpoWeb = document.body;
let btn = document.querySelector("#btn-oscuro");

const btnOscuro = document.querySelector("#btn").addEventListener("click", function(){
    cuerpoWeb.classList.toggle("oscuro");
    btn.classList.toggle("btn-oscuro");

    if(document.body.classList.contains("oscuro")){
        localStorage.setItem("dark-mode", "true");
    }else{
        localStorage.setItem("dark-mode", "false");
    }
});

if(localStorage.getItem("dark-mode") === "true"){
    cuerpoWeb.classList.add("oscuro");
    btn.classList.toggle("btn-oscuro");

}else{
    cuerpoWeb.classList.remove("oscuro");
}

async function articulos(){
    const peticion = await fetch(URL);
    const respuesta = await peticion.json();
    
    try{
        for(let i = 0; i <= 12; i++){
            let articulos = document.createElement("article");
            articulos.innerHTML = `
            <div class="article-category">
                <p>Negocios</p>
            </div>
            <div class="text-article">
                <h2><a href="${respuesta.articles[i].link}" target="_blank">${respuesta.articles[i].title}</a></h2>
            </div>
            <div class="article-font">
                <p>Fuente: ${respuesta.articles[i].source.domain}</p>
            </div>`;
            contenedorArticulos.append(articulos);
            console.log(respuesta.articles[0]);
        }

    }catch(error){
        console.log(error)
    }

}

articulos();