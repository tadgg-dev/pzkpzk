const {promisePool,allAsync,existTable}=require("./conn")

const tabla={productos:"nombre_de_tu_tabla"}
const {productos}=tabla
const funkos= {
    "franquicias": {
        "starwars": [
            {
                "descrip": "Disfruta de una saga que sigue agregando personajes a su colección.",
                "frc": [
                    "START WARS & THE MANDALORIAN",
                    "Star Wars",
                    "starwarsx",
                    "starwarsx2"
                ]
            }
        ],
        "pokemon": [
            {
                "descrip": "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
                "frc": [
                    "POKEMON INDIGO",
                    "Pokemon",
                    "pokemonx",
                    "pokemonx2"
                ]
            }
        ],
        "harryp": [
            {
                "descrip": "Revive los recuerdos de una saga llena de magia y encanto.",
                "frc": [
                    "HARRY POTTER",
                    "Harry Potter",
                    "harrypx",
                    "harrypx2"
                ]
            }
        ]
    },
    "productos": [
        {
            "nompro": "Baby Yoda",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/star-wars/baby-yoda-1.webp",
            "linka": "Collecion",
            "idu": "069001"
            ,"franquicias":"starwars"
        },
        {
            "nompro": "Trooper",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/star-wars/trooper-1.webp",
            "linka": "Collecion",
            "idu": "069002",
            "franquicias":"starwars"
        },
        {
            "nompro": "Luke",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/star-wars/luke-1.webp",
            "linka": "Collecion",
            "idu": "069003"
            ,"franquicias":"starwars"
        },
        {
            "nompro": "Bobba Feth",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/star-wars/bobbafeth-1.webp",
            "linka": "Collecion",
            "idu": "069004"
            ,"franquicias":"starwars"
        },
        {
            "nompro": "Darth Vader",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/star-wars/darth-vader-1.jpg",
            "linka": "Collecion",
            "idu": "069005"
            ,"franquicias":"starwars"
        },
        {
            "nompro": "Harry",
            "descrip": "Revive los recuerdos de una saga llena de magia y encanto.",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/harry-potter/harry-1.webp",
            "linka": "Collecion",
            "idu": "0690011"
            ,"franquicias":"harryp"
        },
        {
            "nompro": "Hermione",
            "descrip": "Revive los recuerdos de una saga llena de magia y encanto.",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/harry-potter/hermione-1.webp",
            "linka": "Collecion",
            "idu": "0690012"
            ,"franquicias":"harryp"
        },
        {
            "nompro": "Luna Leon",
            "descrip": "Revive los recuerdos de una saga llena de magia y encanto.",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/harry-potter/luna-1.webp",
            "linka": "Collecion",
            "idu": "0690013"
            ,"franquicias":"harryp"
        },
        {
            "nompro": "Luna",
            "descrip": "Revive los recuerdos de una saga llena de magia y encanto.",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/harry-potter/luna2.png",
            "linka": "Collecion",
            "idu": "0690014"
            ,"franquicias":"harryp"
        },
        {
            "nompro": "Snape Patronus",
            "descrip": "Revive los recuerdos de una saga llena de magia y encanto.",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/harry-potter/snape-patronus-1.webp",
            "linka": "Collecion",
            "idu": "0690015"
            ,"franquicias":"harryp"
        },
        {
            "nompro": "Charmander",
            "descrip": "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/pokemon/charmander-1.webp",
            "linka": "Collecion",
            "idu": "069006"
            ,"franquicias":"pokemon"
        },
        {
            "nompro": "Dragonite",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/pokemon/dragonite-1.webp",
            "linka": "Collecion",
            "idu": "069007"
            ,"franquicias":"pokemon"
        },
        {
            "nompro": "Pidgeotto",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/pokemon/pidgeotto-1.webp",
            "linka": "Collecion",
            "idu": "069008"
            ,"franquicias":"pokemon"
        },
        {
            "nompro": "Pikachu",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/pokemon/pikachu-1.webp",
            "linka": "Collecion",
            "idu": "069009",
            "franquicias":"pokemon"

        },
        {
            "nompro": "Vulpix",
            "descrip":"",
            "estado": true,
            "precio": "$ 1799,99-",
            "cuotas": "3 Cuotas sin Interés",
            "imgz": "https://dainnin.github.io/proyectowebimg/img/pokemon/vulpix-1.webp",
            "linka": "Collecion",
            "idu": "0690010"
            ,
            "franquicias":"pokemon"
        }
    ]
}

function generarListas(productos) {
    let lista1 = [];
    let lista2 = [];
  
    let franquiciasLista1 = {};
    let franquiciasLista2 = {};
  
    while (productos.length > 0 && (lista1.length < 3 || lista2.length < 6)) {
      // Selecciona un producto aleatorio y lo elimina de la lista de productos
      let indice = Math.floor(Math.random() * productos.length);
      let producto = productos.splice(indice, 1)[0];
  
      if (lista1.length < 3 && !franquiciasLista1[producto.franquicias]) {
        lista1.push(producto);
        franquiciasLista1[producto.franquicias] = true;
        
      } else if (lista2.length < 6) {
        if (!franquiciasLista2[producto.franquicias]) {
          franquiciasLista2[producto.franquicias] = 1;
          lista2.push(producto);
        } else if (franquiciasLista2[producto.franquicias] < 2) {
          franquiciasLista2[producto.franquicias]++;
          lista2.push(producto);
        }
      }
    }
  
    // Filtra la lista2 para eliminar los productos que ya están en lista1
    lista2 = lista2.filter(producto => !lista1.includes(producto));
  
    return [lista1, lista2];
  }


// Ejemplo de consulta a la base de datos usando promesas
async function ProductoTablaEjem() {
   
    try {
      console.log('Conectado a la base de datos MySQL!');
  
      // Crear la tabla si no existe
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${productos} (
          nombre VARCHAR(255) NOT NULL,
          descripcion TEXT,
          id VARCHAR(255) PRIMARY KEY,
          estado BOOLEAN,         
          precio VARCHAR(255),
          cuotas VARCHAR(255),
          imgz TEXT,
          linka1 VARCHAR(255),
          franquicias VARCHAR(255)
        
        )
      `;

    existTable(productos,createTableQuery)

     

      
  
     const mapList=funkos.productos.map(async producto => {
        const insertProductQuery = `
          INSERT INTO nombre_de_tu_tabla ( nombre,estado,descripcion,precio,cuotas,imgz,linka1,id,franquicias)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
          ON DUPLICATE KEY UPDATE nombre = VALUES(nombre), descripcion = VALUES(descripcion)
        `;
  
        await promisePool.query(insertProductQuery,Object.values(producto));
       
      })  
  
      // Insertar los productos en la tabla
      allAsync(mapList)
      console.log('Producto insertado con éxito!');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
module.exports={ProductoTablaEjem}