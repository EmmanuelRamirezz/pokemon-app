import { Outlet, Link, useNavigate } from "react-router-dom";
import pokemonLogo from "../assets/Pokemon_logo.svg"
import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm, active, setActive } = useContext(PokemonContext)



  const navigate = useNavigate() //redirecciona a la pagina de search

  const [searchActive, setSearchActive] = useState(false)

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if(valueSearch==''){
      alert('Ingrese un valor de busqueda valido')
      return
    }
    
    navigate('/search', {
      state: valueSearch
    })

    onResetForm();
  }
  return (
    <>
      <header className="fixed top-0 flex justify-between px-20 h-24 w-full items-center bg-white max-md:gap-5 max-md:px-8">
        <Link to='/'>
          <img src={pokemonLogo} alt="Pokemon Logo" className="w-44" />
        </Link>

        <div className="flex items-center m-10 max-md:mx-auto hover:cursor-pointer hover:text-gray-400"
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
        </div>

        <div className="h-10 md:hidden max-sm:visible">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 hover:cursor-pointer hover:text-gray-400"
            onClick={() => setSearchActive(!searchActive)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <form
          onSubmit={onSearchSubmit}
          className="flex justify-between  w-[500px] gap-2 items-center max-md:w-80 max-md:gap-5 max-md:hidden">
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
              className="w-72 h-9 pl-2 max-lg:w-36"
              type="search"
              name="valueSearch"
              placeholder="Buscar nombre de pokemon"
              value={valueSearch}
              onChange={onInputChange}
            />
          </div>
          <button className="block bg-yellow-400 px-6 h-10 rounded-full text-blue-600 font-bold hover:bg-yellow-300">Buscar</button>
        </form>

        <div className={`absolute top-0 left-0 w-full h-20 bg-white 
        ${searchActive ? '': 'hidden'}`}>
          <form
            className="flex justify-between  w-11/12 gap-2 items-center mx-auto mt-6"
            onSubmit={onSearchSubmit}>
            <div className="flex items-center rounded-full border-2 border-sky-600 pr-4 py-1 ">
              <input
                className="w-40 h-9 ml-4"
                type="search"
                name="valueSearch"
                placeholder="Buscador"
                value={valueSearch}
                onChange={onInputChange}
              />
            </div>

            <button className="block bg-yellow-400 px-3 h-10 rounded-full text-blue-600 font-bold hover:bg-yellow-300">Buscar</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 hover:cursor-pointer hover:text-gray-400"
              onClick={() => setSearchActive(!searchActive)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg >
          </form>
        </div>

      </header>
      <Outlet />
    </>
  );
};
export default Navigation;
