import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import {CardPokemon} from './CardPokemon';


export const PokemonList = () => {

  const {allPokemons} = useContext(PokemonContext);

  return (
    <>
      <div>
        <section className="grid grid-cols-4 grid-flow-row gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-20">
          {allPokemons.map(pokemon => (
            <CardPokemon key = {pokemon.id} pokemon={pokemon} />
          ))}
        </section>

      </div>
    </>
  )
}
