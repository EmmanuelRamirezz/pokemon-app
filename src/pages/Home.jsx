import { PokemonList, FilterBar } from "../components";
import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";


const Home = () => {
  const { onClickLoadMore, setOnSearch, onSearchFunction} = useContext(PokemonContext)
  //verifica si estamos en la pagina search o no


  return (
    <>
      <FilterBar/>
      <PokemonList />

      <div className="w-11/12 flex justify-center my-10 mx-auto">
        <button className="block bg-yellow-400 px-6 h-10 rounded-full text-blue-600 font-bold hover:bg-yellow-300"
          onClick={onClickLoadMore}>
          Cargar más
        </button>
      </div>
    </>
  );
};
export default Home;
