import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext"
import {CardPokemon} from "../components"



const Search = () => {
  const location = useLocation()

  const { globalPokemons } = useContext(PokemonContext) //todos, del 0 al 1054

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))//obtiene el estado y lo pasa a minusculas
  //Filtra a los elementos que incluya el nombre que le indicamos

  console.log(filteredPokemons);
  return (
    <div>
      <h2 className="m-10 font-bold max-md:mt-36 max-md:text-center">
        Se encontraron 
        <span className="text-sky-600"> {filteredPokemons.length} </span> 
        resultados
        </h2>
        <div className="grid grid-cols-4 grid-flow-row gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-20">

          {filteredPokemons.map(pokemon => (
          <CardPokemon pokemon ={pokemon} key={pokemon.id}/> 
          ))}
        </div>
    </div>
  )
}
export default Search;
// useLocation
//useParams
//useNavigate