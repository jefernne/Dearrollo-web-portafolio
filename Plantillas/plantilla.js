const datospc= [{
    nombre: "GTX-4090",
    descripcion: "ASUS TUF Gaming NVIDIA GeForce RTX 3090 Ti OC Edition Tarjeta gráfica (PCIe 4.0, 24GB GDDR6X, HDMI 2.1, DisplayPort 1.4a, rodamientos de ventilador de doble bola, certificación de grado militar, GPU Tweak)",
    precio: "$2,800",
    foto: "./img/nana-dua-1-Sfd9QSPi4-unsplash.jpg",
},
{
    nombre: "Ryzen 7 3700x",
    descripcion: "Procesador AMD Ryzen 7 5700G 100-100000263BOX de 8 núcleos y 4.6GHz de frecuencia con gráfica integrada.",
    precio: "$1,800",
    foto: "./img/luis-gonzalez-eBaFpf47__0-unsplash.jpg",
},
{
    nombre: "Intel-core i9",
    descripcion: "Procesador Intel Core I9-12900K BX8071512900K de 16 núcleos y 5.2GHz de frecuencia con gráfica integrada.",
    precio: "$2.800",
    foto: "./img/slejven-djurakovic-0uXzoEzYZ4I-unsplash.jpg",
},
];

function plantilla(datospc) {
return ` <div class="tarjeta">
<div class="card">
    <div class="face front">
        <img src="${datospc.foto}" alt="">
        <h3>${datospc.nombre}</h3>
    </div>
    <div class="face back">
        <h3>${datospc.nombre}</h3>
        <p>${datospc.descripcion}</p>

        <button class="Comprar">${datospc.precio}</button>
    </div>
</div>
</div>  `


/*    
return `<div class="ficha-producto">
<img class="foto" src=${datosVehiculos.foto}><div><h2 class="nombre">${datosVehiculos.nombre}</h2><p class="precio">Precio: ${datosVehiculos.precio}</p>
<p class="cantidad">Cantidad Producida: ${datosVehiculos.cantidad}</p><p class="descripcion">${datosVehiculos.descripcion}</p>
<button class="btn">Cotizar</button>
</div></div>`;
*/
}
const p1 = (document.getElementById("PC").innerHTML = `<h1>partes de pc</h1> 
${datospc.map(plantilla).join("")} 
<p class="cantidad"></p><br>`);