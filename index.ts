
type Lugar ={
    id:number,
    nombre:string,
    tipo:string,
    peligro:number
}

type Personaje={
    id:number,
    nombre:string,
    fuerza:number,
    aliado:boolean
}
type Objeto={
    id:number,
    nombre:string,
    poder:number,
    categoria:string
}

const lugares: Lugar[] = [
  { id: 1, nombre: "Bosque Misterioso", tipo: "bosque", peligro: 2 },
  { id: 2, nombre: "Cueva Oscura", tipo: "cueva", peligro: 5 },
  { id: 3, nombre: "Castillo Abandonado", tipo: "castillo", peligro: 4 }
];
 
const personajes: Personaje[] = [
  { id: 1, nombre: "Guardián", fuerza: 8, aliado: false },
  { id: 2, nombre: "Sabio", fuerza: 2, aliado: true },
  { id: 3, nombre: "Bandido", fuerza: 6, aliado: false }
];
 
const objetos: Objeto[] = [
  { id: 1, nombre: "Espada", poder: 5, categoria: "arma" },
  { id: 2, nombre: "Antorcha", poder: 1, categoria: "herramienta" },
  { id: 3, nombre: "Amuleto", poder: 3, categoria: "mágico" },
  { id: 4, nombre: "Escudo", poder: 4, categoria: "arma" }
];




const listarLugares=()=>{
    lugares.forEach((l)=>{
        console.log(l.nombre+", peligro:"+ l.peligro)
    })
}

const buscarPersonaje=(nombre:string)=>{
    const resultado = personajes.filter((p) => {
    if (p.nombre === nombre) {
    console.log(`Encontrado: ${p.nombre}, fuerza: ${p.fuerza}, ${p.aliado ? "Aliado" : "Enemigo"}`
    );
        return true; 
    }
    return false;
    }); 
}



const inventarioConFrases =() =>{ 
     return objetos.map((o) => { 
        return (o.id+". "+o.nombre+". "+o.categoria+"."+o.poder);

    });
}
/*
const agruparObjetosPorCategoria = () => {
    return objetos.reduce((acc: { [key: string]: Objeto[] }, obj) => {
        if (!acc[obj.categoria]) {  
            acc[obj.categoria] = [];
        }       
        acc[obj.categoria].push(obj);
        return acc;
    },{});
}   
*/

const poderTotalInventario = () => {
    return objetos.reduce((total, obj) => total + obj.poder, 0);
}

const main = (): void => {
  const opcion: number = 3; // Cambia este número para probar
 
  switch (opcion) {
    case 1:
      listarLugares();
      break;
    case 2:
      const nombreBuscado = "Sabio"; // Cambia el nombre para probar
      buscarPersonaje(nombreBuscado);
      break;
    case 3:
      console.log(inventarioConFrases());
      break;
    /*
    case 4:
      console.log(agruparObjetosPorCategoria());
      break;
    */
    case 5:
      console.log("Poder total:", poderTotalInventario());
      break;
    default:
      console.log("Opción no válida.");
  }
};

main();
