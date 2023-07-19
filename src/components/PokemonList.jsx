import { PokemonContext } from "../context/PokemonContext";
import { useContext, useState } from "react";
import { CardPokemon, Loader } from "../components";
import { CardPokemonList } from "./CardPokemonList";
import { Pagination } from "./Pagination";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons, vista, page, totalPages, lastPage, nextPage,} =
    useContext(PokemonContext);
      //Logica de paginacion

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {vista ? (
            <>
              <div className=" bg-gray-100 mt-36 flex  justify-evenly w-3/4 mx-auto max-xl:w-11/12">
                <div className="border-2 border-r-0 border-sky-600 h-12 w-1/4 text-center">
                  Imagen
                </div>
                <div className="border-2 border-r-0 border-sky-600 h-12 w-1/4 text-center max-sm:w-[20%]">
                  Número
                </div>
                <div className="border-2 border-r-0 border-sky-600 h-12 w-1/4 text-center max-sm:w-[30%]">
                  Nombre
                </div>
                <div className="border-2 border--0 border-sky-600 h-12 w-1/4 text-center">
                  Tipo
                </div>
              </div>
              <section className="w-3/4 mx-auto mb-20 max-lg:grid-cols-2 max-xl:w-11/12">
                {filteredPokemons.length ? (
                  <>
                    {filteredPokemons.map((pokemon) => (
                      <CardPokemonList key={pokemon.id} pokemon={pokemon} />
                    ))}
                  </>
                ) : (
                  <>
                    {allPokemons.map((pokemon) => (
                      <CardPokemonList key={pokemon.name} pokemon={pokemon} />
                    ))}
                                                  <Pagination
            page={page}
            totalPages={totalPages}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
                  </>
                )}
              </section>
            </>
          ) : (
            <div>
            <section className="grid grid-cols-4 grid-flow-row gap-10 w-3/4 mb-20 mx-auto mt-36 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-36 max-xl:w-11/12">
              {filteredPokemons.length ? (
                <>
                  {filteredPokemons.map((pokemon) => (
                    <CardPokemon key={pokemon.id} pokemon={pokemon} />
                  ))}
                </>
                
              ) : (
                <>
                <Pagination
            page={page}
            totalPages={totalPages}
            onLeftClick={lastPage}
            onRightClick={nextPage}
          />
                  {allPokemons.map((pokemon) => (
                    <CardPokemon key={pokemon.name} pokemon={pokemon} />
                  ))}

                </>
                
              )}
            </section>
            
            </div>

          )}

        </div>
      )}
    </>
  );
};
