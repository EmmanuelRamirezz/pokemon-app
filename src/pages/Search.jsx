import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon, CardPokemonList, FilterBar } from "../components";
//import {  } from "../components/CardPokemonList";

const Search = () => {
  const location = useLocation();

  const { globalPokemons, vista, onSearch, setOnSearch} = useContext(PokemonContext); //todos, del 0 al 1054

  //verifica si estamos en la pagina search o no


  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  ); //obtiene el estado y lo pasa a minusculas
  //Filtra a los elementos que incluya el nombre que le indicamos
  return (
    <>
    <FilterBar/>
      {vista ? (
        <div>
          <h2 className="m-10 font-bold max-md:mt-36 max-md:text-center">
            Se encontraron
            <span className="text-sky-600"> {filteredPokemons.length} </span>
            resultados
          </h2>
          <div>
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
          </div>
        </div>
      ) : (
        <div>
          <h2 className="m-10 font-bold max-md:mt-36 max-md:text-center">
            Se encontraron
            <span className="text-sky-600"> {filteredPokemons.length} </span>
            resultados
          </h2>
          <div className="grid grid-cols-4 grid-flow-row gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-20">
            {filteredPokemons.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Search;
// useLocation
//useParams
//useNavigate
