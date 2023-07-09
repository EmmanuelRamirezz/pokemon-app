import { Link } from "react-router-dom"
import { primerMayuscula } from "../helpers/helpers"

export const CardPokemon = ({pokemon}) => {
  return(
    <Link to = {`/pokemon/${pokemon.id}`} className="mx-auto">
       <div className="bg-gray-200 w-72 h-72 max-lg:w-56 max-xl:h-52 max-xl:w-52">
        <img
         src={pokemon.sprites.other.dream_world.front_default}
         alt={`Pokemon ${pokemon.name}`}
         className="w-11/12 h-5/6 m-auto"
         />
       </div>
       <div className="pl-4">
        <span className="text-gray-400">No. {pokemon.id}</span>
        <h3 className="font-bold text-lg">{primerMayuscula(pokemon.name)}</h3>
       </div>
       <div className="flex justify-evenly mt-4">
          {pokemon.types.map(type => (
            <div key = {type.type.name} className= {`${type.type.name} py-2 px-4 rounded-md mx-auto text-white font-bold`}>
              {primerMayuscula(type.type.name)}
            </div>
          ))}
          <span></span>
        </div>
    </Link>
  ) 
}