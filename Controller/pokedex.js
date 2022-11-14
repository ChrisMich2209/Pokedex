//Se crea el fetch que mandara el dato ingresado en el input
const fetchpokemon = async () =>{
    const pokenameinput = document.getElementById("pokename")
    let pokename = pokenameinput.value;

    /*Forzar a que el texto intrucido en el input sea en minuscula aunque se escriba en mayuscula*/
    pokename = pokename.toLowerCase();
    

    /*Mandar a llamar la API POKEDEX por medio del nombre/numero de pokemon */
    const url = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
    

    /*Funcion para consultar la API */

    /*En esta parte consulta si existe el pokemon, de lo contrario, lanza error y realiza ciertas acciones */
    let data = await fetch(url).then((res) =>{
        if(res.status != "200"){
            console.log(res);
            pokeimage("./View/pokemon-pikachu.gif")
            let error = document.getElementById("pokeinfo");
            let errortype = document.getElementById("poketype");
            let errorabilities = document.getElementById("pokeabilities");
            document.getElementById("pokename").value = "";
            let errorsprite1=document.getElementById("square1_1");
            let errorsprite2=document.getElementById("square2_2");
            let errorsprite3=document.getElementById("square3_3");
            let errorsprite4=document.getElementById("square4_4");
            let errorAltura=document.getElementById("AlturaText");
            let errorPeso=document.getElementById("PesoText");
            

            error.innerHTML="Lo siento pero el pokemon que buscas no existe 😢, intenta nuevamente.";
            errortype.innerHTML="";
            errorabilities.innerHTML="";
            errorAltura.innerHTML="";
            errorPeso.innerHTML="";
            errorsprite1.src="/View/cuadro_generico.png";
            errorsprite2.src="/View/cuadro_generico.png";
            errorsprite3.src="/View/cuadro_generico.png";
            errorsprite4.src="/View/cuadro_generico.png";
        }else{
            return res.json();
        }
    })

    /*Si existe respuesta(data) muestra lo solicitado*/
    if (data){
        console.log(data);

        //Se le asigna a la variable el contenido que se requiere desde la API, notese que en este punto ya  traemos todo el objeto(DATA)
        let pokeImg = data.sprites.other.home.front_default;
        pokeimage(pokeImg);
        console.log(pokeImg);

        let Pokeinfo = data.species.name;
        Pokeinf(Pokeinfo);

        let PokeType=data.types;
        Type(PokeType);

        let PokeAbilities = data.abilities;
        ability(PokeAbilities);

        let sprites= data.sprites.front_default;
        spriteFront1(sprites);

        let spritesBack = data.sprites.back_default;
        spritesBack1(spritesBack);

        let sprites2 = data.sprites.front_shiny;
        spritesFront2(sprites2);

        let spritesBack2 = data.sprites.back_shiny;
        spritesBack2d(spritesBack2);

        let pokePeso = data.weight;
        Peso(pokePeso);
        console.log(pokePeso);

        let pokeAltura = data.height;
        Altura(pokeAltura);
        console.log(pokeAltura)
        
    
        
        
    }
    
}

//*********************Funciones***********************//

//Se asigna la imagen del pokemon a la de la pokeball y se cambia
const pokeimage =(url) =>{
    const pokePhoto = document.getElementById("pokeimage");
    pokePhoto.src = url;
}

const Pokeinf=(name)=>{
const PokeInfo = document.getElementById("pokeinfo");
PokeInfo.innerHTML ="Nombre:" + "  "+ name;

}


const Type=(types) =>{
    const poketype = document.getElementById("poketype");
    const typename = types.map((item)=>item.type.name);
    poketype.innerHTML="Tipo:" + "  "+ typename;
}
  
    
const ability=(name)=>{
    const Pokeability = document.getElementById("pokeabilities");
    const ability = name.map((item)=>item.ability.name);
    
    Pokeability.innerHTML= "Habilidades:"+"  "+ability;
}


const spriteFront1=(url)=>{
    let spriteSquare1 = document.getElementById("square1_1");
    spriteSquare1.src = url;
}

const spritesBack1=(url)=>{
    let spriteSquare2 = document.getElementById("square2_2");
    spriteSquare2.src=url;

}


const spritesFront2=(url)=>{
    let spriteSquare3 = document.getElementById("square3_3");
    spriteSquare3.src=url;
}

const spritesBack2d=(url)=>{

    let spriteSquare4 = document.getElementById("square4_4");
    spriteSquare4.src=url;
    
}




const Altura=(height)=>{
    let pokeAltura = document.getElementById("AlturaText");
    let alturaConvetida= height/10;
    pokeAltura.innerHTML ="Altura:" + "  "+ alturaConvetida + "  "+"M.";
    
    }


const Peso=(weight)=>{
    let pokePeso = document.getElementById("PesoText");
    let pesoconvertido = weight/10;
    pokePeso.innerHTML= "Peso:" +"  "+ pesoconvertido + "  "+"kg.";

}




// const pesoPokemon=(weight)=>{

//     let DivPeso = document.getElementById("AlturaText");
//     DivPeso.innerHTML= "Peso:" + "  " + weight;
// }

