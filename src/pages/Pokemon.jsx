import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Loader } from "../components/";

const Pokemon = () => {
  const { getPokemonByID } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams(); //destructuracion del id
  //si la ruta es: pokemon/id entonces retorna el id en forma de objeto
  //se usa para acceder y modificar los parametros de la url
  //aquí usamos el id que viene en el url y lo usamos en el componente pokemon

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
    //(Puedo usar estas funciones debido a que están en el context )
  };
  useEffect(() => {
    fetchPokemon(id); //este id es el de useParams
  }, []);
  return (
    <div>
      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="w-11/12 m-auto">
              <div className="flex justify-evenly ">
                <span className="text-[150px] text-blue-300">
                  #{pokemon.id}
                </span>
                <div className="w-56 h-56">
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${pokemon?.name}`}
                    className="mx-auto"
                  />
                </div>
              </div>

              <h1 className="text-center text-7xl">{pokemon.name}</h1>

              <div className=" flex justify-evenly my-10">
                <div className="text-center">
                  <h2 className="font-bold">Tipo</h2>
                  <div className="">
                    {pokemon.types.map((type) => (
                      <span
                        key={type.type.name}
                        className={`${type.type.name}`}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <div className="group-info">
                    <h2 className="font-bold">Altura</h2>
                    <span>{pokemon.height}</span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="font-bold">Peso</h2>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="">
                  <h1 className="text-center text-5xl">Estadísticas</h1>
                  <div className="mt-10">
                    <div className="flex h-10 items-center">
                      <span className="w-28">Hp</span>
                      <div className="w-96 h-6 bg-blue-300 rounded-lg mx-4"></div>
                      <span className="counter-stat">
                        {pokemon.stats[0].base_stat}
                      </span>
                    </div>
                    <div className="flex h-10 items-center">
                      <span className="w-28">Attack</span>
                      <div className="w-96 h-6 bg-blue-300 rounded-lg mx-4"></div>
                      <span className="counter-stat">
                        {pokemon.stats[1].base_stat}
                      </span>
                    </div>
                    <div className="flex h-10 items-center">
                      <span className="w-28">Defense</span>
                      <div className="w-96 h-6 bg-blue-300 rounded-lg mx-4"></div>
                      <span className="counter-stat">
                        {pokemon.stats[2].base_stat}
                      </span>
                    </div>
                    <div className="flex h-10 items-center">
                      <span className="w-28">Special Attack</span>
                      <div className="w-96 h-6 bg-blue-300 rounded-lg mx-4"></div>
                      <span className="counter-stat">
                        {pokemon.stats[3].base_stat}
                      </span>
                    </div>
                    <div className="flex h-10 items-center">
                      <span className="w-28">Special Defense</span>
                      <div className="w-96 h-6 bg-blue-300 rounded-lg mx-4"></div>
                      <span className="counter-stat">
                        {pokemon.stats[4].base_stat}
                      </span>
                    </div>
                    <div className="flex  h-10 items-center">
                      <span className="w-28">Speed</span>
                      <div className="w-96 h-6 bg-blue-300 rounded-lg mx-4"></div>
                      <span className="counter-stat">
                        {pokemon.stats[5].base_stat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
export default Pokemon;
