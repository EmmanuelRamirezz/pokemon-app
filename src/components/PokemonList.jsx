import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import {CardPokemon} from './CardPokemon';


export const PokemonList = () => {

  const {allPokemons} = useContext(PokemonContext);

  return (
    <>
      <div>
        <h1>PokemonLists</h1>
        {allPokemons.map(pokemon => (
          <CardPokemon key = {pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
