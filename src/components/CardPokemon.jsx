import { Link } from "react-router-dom"

export const CardPokemon = ({pokemon}) => {
  return(
    <Link to = {`/pokemon/${pokemon.id}`} className="mx-auto">
       <div className="bg-gray-200 w-64 h-64">
        <img
         src={pokemon.sprites.other.dream_world.front_default}
         alt={`Pokemon ${pokemon.name}`}
         className="w-11/12 h-5/6 m-auto"
         />
       </div>
       <div className="pl-4">
        <span className="text-gray-400">No. {pokemon.id}</span>
        <h3 className="font-bold text-lg">{pokemon.name}</h3>
       </div>
       <div className="flex justify-evenly mt-4">
          {pokemon.types.map(type => (
            <div key = {type.type.name} className= {`bg-${type.type.name} py-2 px-4 rounded-md mx-auto text-white font-bold`}>
              {type.type.name}
            </div>
          ))}
          <span></span>
        </div>
    </Link>
  ) 
}