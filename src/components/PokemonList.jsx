import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import { CardPokemon, Loader } from '../components';


export const PokemonList = () => {

  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) :
          (
            <div>
              <section className="grid grid-cols-4 grid-flow-row gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-20">
                {
                  filteredPokemons.length ? (
                    <>
                      {filteredPokemons.map(pokemon => (
                        <CardPokemon key={pokemon.id} pokemon={pokemon} />
                      ))}
                    </>

                  ) : (
                    <>
                      {allPokemons.map(pokemon => (
                        <CardPokemon key={pokemon.name} pokemon={pokemon} />
                      ))}
                    </>

                  )
                }

              </section>
            </div>
          )
      }
    </>
  )
}
