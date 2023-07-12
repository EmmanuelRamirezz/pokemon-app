import { Link } from "react-router-dom"
import { primerMayuscula } from "../helpers/helpers"

export const CardPokemonList = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}
      className="flex bg-gray-100 hover:bg-gray-200">


        <div className="w-1/4 border-2 border-r-0 border-t-0 border-sky-600">
          <div className="w-20 h-20 bg-white rounded-full mx-auto my-2">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={`Pokemon ${pokemon.name}`}
              className="w-11/12 h-5/6 m-auto"
            />
          </div>
        </div>


        <div className="flex items-center w-1/4 border-2 border-r-0 border-t-0 border-sky-600 max-sm:w-[20%]">
          <h3 className="text-gray-400 mx-auto">No. {pokemon.id}</h3>
        </div>


        <div className="flex items-center w-1/4 border-2 border-r-0 border-t-0 border-sky-600 max-sm:w-[30%]">
          <h3 className="font-bold text-lg mx-auto">{primerMayuscula(pokemon.name)}</h3>
        </div>


        <div className=" flex items-center w-1/4 border-2 border-t-0 border-sky-600 max-md:flex-col max-md:justify-evenly">
          {pokemon.types.map(type => (
            <div key={type.type.name} className={`${type.type.name} py-2 px-4 m-2 rounded-md mx-auto text-white font-bold`}>
              {primerMayuscula(type.type.name)}
            </div>
          ))}
          <span></span>
        </div>
    </Link>

  )
}