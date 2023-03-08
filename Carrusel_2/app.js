let imagenes = [{
    "url": "img/gato_2.png",
    "nombre": "Proyecto 01",
    "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsam blanditiis beatae voluptate unde ipsum, ex reprehenderit modi quod libero corporis nobis consectetur? Voluptate fugiat ullam nam voluptatibus, voluptatem et?"
},{
    "url": "img/LectorPDF_2.png",
    "nombre": "Proyecto 02",
    "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsam blanditiis beatae voluptate unde ipsum, ex reprehenderit modi quod libero corporis nobis consectetur? Voluptate fugiat ullam nam voluptatibus, voluptatem et?"
},{
    "url": "img/LecturaHistoria1.png",
    "nombre": "Proyecto 03",
    "descripcion": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsam blanditiis beatae voluptate unde ipsum, ex reprehenderit modi quod libero corporis nobis consectetur? Voluptate fugiat ullam nam voluptatibus, voluptatem et?"
}]
let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img_c");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("text_carru");
let actual = 0
posicionCarrusel()

atras.addEventListener("click", function(){
    actual -= 1
    if(actual == -1){
        actual = imagenes.length -1
    }
    imagen.innerHTML=` <img src="${imagenes[actual].url}" alt="imagen 2" loading="lazy"></img>`
    texto.innerHTML=` <h3>${imagenes[actual].nombre}</h3>, <p>${imagenes[actual].descripcion}</p>`
    posicionCarrusel()
})

adelante.addEventListener("click", function(){
    actual += 1
    if(actual == imagenes.length){
        actual = 0
    }
    imagen.innerHTML=` <img src="${imagenes[actual].url}" alt="imagen 2" loading="lazy"></img>`
    texto.innerHTML=` <h3>${imagenes[actual].nombre}</h3>, <p>${imagenes[actual].descripcion}</p>`
    posicionCarrusel()
})
function posicionCarrusel(){
    puntos.innerHTML = ""
    for(var i = 0; i<imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML +=  ' <p class = "bold">.<p> ' 
        } 
        else{
            puntos.innerHTML +=  ' <p>.<p> ' 
        }
    }
}

