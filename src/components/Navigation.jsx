import { Outlet, Link, useNavigate } from "react-router-dom";
import pokemonLogo from "../assets/Pokemon_logo.svg"
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Navigation = () => {
  const {onInputChange, valueSearch, onResetForm} = useContext(PokemonContext)

  const navigate = useNavigate() //redirecciona a la pagina de search

  const onSearchSubmit = (event) => {
    event.preventDefault()
    navigate('/search', {
      state: valueSearch
    })

    onResetForm();
  }
  return (
    <>
      <header className="flex justify-between px-20 h-24 items-center max-md:flex-col max-md:gap-5">
        <Link to = '/'>
          <img src={pokemonLogo} alt="Pokemon Logo" className="w-44"/>
        </Link>
        <form 
        onSubmit={onSearchSubmit}  
        className="flex justify-between  w-[500px] gap-2 items-center max-md:flex-col max-md:w-80 max-md:gap-5">
          <div className="flex items-center rounded-full border-2 border-sky-600 pr-4 py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input 
            className="w-72 h-9 pl-2"
            type="search"
            name="valueSearch"
            id=""
            placeholder="Buscar nombre de pokemon"
            value={valueSearch}
            onChange={onInputChange}
            />
          </div>
          <button className="block bg-yellow-400 px-6 h-10 rounded-full text-blue-600 font-bold hover:bg-yellow-300">Buscar</button>
        </form>
      </header>
      <Outlet />
    </>
  );
};
export default Navigation;
