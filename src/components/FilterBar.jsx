import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
//import { setVisible, visible } from "../pages/Home";

export const FilterBar = () => {
  const {visible} = useContext(PokemonContext)
  console.log(visible+ 'context');
  return (
    <div className={`fixed flex left-0 top-0 h-full w-64 bg-gray-300 items-center invisible${visible ? 'invisible' : ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 absolute top-0 left-2 hover:cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg >
      <div className="pl-4 gap-2 flex flex-col">
        <span className="font-bold mb-4 block">Tipo</span>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Planta</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Fuego</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Bicho</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Hada</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Dragon</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Fantasma</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Tierra</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Normal</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Psiquico</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Acero</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Siniestro</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Electrico </label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Lucha</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Volador</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Hielo</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Veneno</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Roca</label>
        </div>
        <div>
          <input type="checkbox" name="grass" id="grass" />
          <label htmlFor="grass" className="text-gray-600 ml-4">Agua</label>
        </div>
      </div>
    </div>
  );
};
