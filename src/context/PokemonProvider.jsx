import { PokemonContext } from "./PokemonContext";
import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";

const PokemonProvider = ({children}) => {
  //Guarda la visualización
  const [vista, setVista] = useState(false);
  //Guarda todos los pokemones
  const [globalPokemons, setGlobalPokemons] = useState([])
  //Guarfa los primeros 50 pokemones
  const [allPokemons, setAllPokemons] = useState([]);
  //Hace referencia el inicio de los pokemones
  const [offset, setOffset] =useState(0);

  //Logica de paginación
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()


  //Estados que guardan info de la app
  //Cargar
  const [loading, setLoading] = useState(true)
  //Filtrar
  const [active, setActive] = useState(false)

  //Creamos y utilizamos un custom hook
  const {valueSearch, onInputChange, onResetForm} = useForm ({
    valueSearch: '',
  })
  //verifica si estamos en search
  const [onSearch, setOnSearch] = useState(false)


  //Funcion para llamar 50 pokemones a la api

  const getAllPokemons = async (limit=50) => {
    //Si no le mando ningun valor a la funcion entonces limit por defecto es 50
    const baseUrl = 'https://pokeapi.co/api/v2/'
    const res = await fetch (`${baseUrl}pokemon?limit=${limit}&offset=${offset}`)//Empieza desde el pokemon 0 hasta el 50
    const data = await res.json();
    //console.log(data);
    setTotalPages(Math.ceil(data.count / 50))
    //Me retorna el nombre del pokemon y un link con toda su info
    const promises = data.results.map(async(pokemon) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
      //Me retorna un arreglo de promesas
    })
    const results = await Promise.all(promises)
    //El arreglo de promesas lo pasa a arreglo normal usando la el metodo all de la clase Promise
    setAllPokemons([])
    setAllPokemons([
      //...allPokemons,
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
  },[offset])
  //cada vez que offset cambie entonces haz otro llamado 

  //El llamado en si a todos los pokemones
  useEffect(() => {
    getGlobalPokemons()

  }, [])
//logica de paginacion
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0)
    setPage(nextPage)
    setOffset(offset-50)
  }
  const nextPage = () => {
    const nextPage = Math.min(page + 1, totalPages)
    setPage(nextPage)
    setOffset(page*50)

  }

  //Funciones para el filtro
  const [seleccion, setSeleccion] = useState('')
  //filtro
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
  })
  const [filteredPokemons, setFilteredPokemons] = useState([])

  const handleCheckBox = (event) => {
    setTypeSelected({
      ...typeSelected, //lo esparsimos
      [event.target.name]: event.target.checked //propiedad computada
    })
    setSeleccion(event.target.name)

    if(event.target.checked){
      const filteredResults = globalPokemons.filter(pokemon => pokemon.types.map(type => type.type.name).includes(event.target.name))
      
      setFilteredPokemons([...filteredPokemons, ...filteredResults]) //esparsimos ambos arreglos en 1, aplica los resultados en varios checkbox seleccionados a la vez
      console.log(filteredResults);
    }else{
      const filteredResults = filteredPokemons.filter(pokemon => !pokemon.types.map(type => type.type.name).includes(event.target.name))   
      setFilteredPokemons([...filteredResults])
      //aplica el else cuando se deselecciona alguna casilla. hace que las demas casillas sigan funcionando
      //devuelve todos los pokemones que no pertenecen al de la casilla seleccionada
    }
  }


  return(
    <PokemonContext.Provider value = {{
      valueSearch,
      onInputChange,
      onResetForm,
      allPokemons,
      globalPokemons,
      getPokemonByID, 
      //loader
      setLoading,
      loading,
      //btn open/closa filter
      active,
      setActive,
      //filter functions
      seleccion,
      setSeleccion,
      handleCheckBox,
      filteredPokemons,
      typeSelected,
      //vistas
      vista,
      setVista,
      //verifica si estamos en search
      onSearch,
      setOnSearch,
      //paginacion
      page,
      totalPages,
      lastPage,
      nextPage,


      //el valor es un objeto (diccionario)
      //Muchos contextos en un objeto
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonProvider;