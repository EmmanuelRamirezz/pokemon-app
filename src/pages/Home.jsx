import { PokemonList, FilterBar } from "../components";
import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Home = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext)


  return (
    <>
      <div className="flex items-center w-32 m-10 max-md:mt-32 max-md:mx-auto hover:cursor-pointer" 
      onClick={() => setActive(!active)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 mr-4 max-md:mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
        <h2 className="font-bold max-md:mx-auto">Filtrar</h2>
      </div>



      <FilterBar/>
      <PokemonList />
      <div className="w-11/12 flex justify-center my-10">
        <button className="block bg-yellow-400 px-6 h-10 rounded-full text-blue-600 font-bold hover:bg-yellow-300"
          onClick={onClickLoadMore}>
          Cargar más
        </button>
      </div>
    </>
  );
};
export default Home;
