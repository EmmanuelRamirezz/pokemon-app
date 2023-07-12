import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
import { CardPokemon, Loader } from '../components';
import { CardPokemonList } from "./CardPokemonList";


export const PokemonList = () => {

  const { allPokemons, loading, filteredPokemons, vista, setVista } = useContext(PokemonContext);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) :
          (
            <div>
              {vista ? (
                <>
                <div className=" bg-gray-100 mt-36 flex  justify-evenly w-3/4 mx-auto max-xl:w-11/12">
                  <div className="border-2 border-r-0 border-sky-600 h-12 w-1/4 text-center">Imagen</div>
                  <div className="border-2 border-r-0 border-sky-600 h-12 w-1/4 text-center max-sm:w-[20%]">Número</div>
                  <div className="border-2 border-r-0 border-sky-600 h-12 w-1/4 text-center max-sm:w-[30%]">Nombre</div>
                  <div className="border-2 border--0 border-sky-600 h-12 w-1/4 text-center">Tipo</div>
                </div>
                <section className="w-3/4 mx-auto max-lg:grid-cols-2 max-xl:w-11/12">
                  {
                    filteredPokemons.length ? (
                      <>
                        {filteredPokemons.map(pokemon => (
                          <CardPokemonList key={pokemon.id} pokemon={pokemon} />
                        ))}
                      </>

                    ) : (
                      <>
                        {allPokemons.map(pokemon => (
                          <CardPokemonList key={pokemon.name} pokemon={pokemon} />
                        ))}
                      </>

                    )
                  }
                </section>
                </>
                
              ) : (
                <section className="grid grid-cols-4 grid-flow-row gap-10 w-3/4 mx-auto mt-36 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-36 max-xl:w-11/12">
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

              )}

            </div>
          )
      }
    </>
  )
}
