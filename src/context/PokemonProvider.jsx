import { PokemonContext } from "./PokemonContext";
import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

const PokemonProvider = ({children}) => {
  //Guarda todos lo pokemones
  const [globalPokemons, setGlobalPokemons] = useState([])
  //Guarfa los primeros 50 pokemones
  const [allPokemons, setAllPokemons] = useState([]);
  //Hace referencia el inicio de los pokemones
  const [offset, setOffset] =useState(0);
  //Estados que guardan info de la app

  //Cargar
  const [loading, setLoading] = useState(true)
  //Filtrar
  const [activem, setActive] = useState(false)

  //Creamos y utilizamos un custom hook
  const {valueSearch, onInputChange, onResetForm} = useForm ({
    valueSearch: '',
  
  })

  //Funcion para llamar 50 pokemones a la api
  const getAllPokemons = async (limit = 50) => {
    //Si no le mando ningun valor a la funcion entonces limit por defecto es 50
    const baseUrl = 'https://pokeapi.co/api/v2/'

    const res = await fetch (`${baseUrl}pokemon?limit=${limit}&offset=${offset}`)//Empieza desde el pokemon 0 hasta el 50
    const data = await res.json();
    console.log(data);
    //Me retorna el nombre del pokemon y un link con toda su info

    const promises = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
      //Me retorna un arreglo de promesas
    })
    const results = await Promise.all(promises)
    //El arreglo de promesas lo pasa a arreglo normal usando la el metodo all de la clase Promise
    setAllPokemons([
      ...allPokemons,
      ...results
    ])
    // con el operadro spread esparcimos los elementos del array. Esparce lo 2 arreglos en 1 solo. Estamos combinando los arreglos de allPokemons (aunque esté vacio). Se crea un solo arreglo a partir de 2 arreglos  
    setLoading(false) //Indica que ya cargó
  }

  //Funcion que carga a todos los pokemons
  const getGlobalPokemons = async () => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const res = await fetch (`${baseUrl}pokemon?limit=100000&offset=0`)
    const data = await res.json()
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })
    const results = await Promise.all(promises)
    setGlobalPokemons(results)
    setLoading(false)//Indica que ya cargó
  }

  //Funcion que llama a un pokemon por id
  const getPokemonByID = async (id) => {
    const baseUrl = 'https://pokeapi.co/api/v2/';
    const res = await fetch(`${baseUrl}pokemon/${id}`)
    const data = await res.json()
    return data
  }
  //El llamado en si a los 50 pokemones
  useEffect(() => {
    getAllPokemons()
  },[])

  //El llamado en si a todos los pokemones
  useEffect(() => {
    getGlobalPokemons()
  }, [])


  return(
    <PokemonContext.Provider value = {{
      valueSearch,
      onInputChange,
      onResetForm,
      allPokemons,
      globalPokemons,
      getPokemonByID, 
      //el valor es un objeto (diccionario)
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonProvider;