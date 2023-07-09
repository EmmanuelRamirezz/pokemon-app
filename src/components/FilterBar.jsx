import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
//import { setVisible, visible } from "../pages/Home";

export const FilterBar = () => {
  const {active, setActive, handleCheckBox} = useContext(PokemonContext)
  return (
    <div className={`fixed flex left-0 top-0 h-full w-64 bg-gray-300 items-center invisible${active ? 'invisible' : ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 absolute top-2 left-2 hover:cursor-pointer"
        onClick={() => setActive(!active)}
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
          <input type="checkbox" name="grass" id="grass" onChange={handleCheckBox}/>
          <label htmlFor="grass" className="text-gray-600 ml-4">Planta</label>
        </div>
        <div>
          <input type="checkbox" name="fire" id="fire" onChange={handleCheckBox}/>
          <label htmlFor="fire" className="text-gray-600 ml-4">Fuego</label>
        </div>
        <div>
          <input type="checkbox" name="bug" id="bug" onChange={handleCheckBox}/>
          <label htmlFor="bug" className="text-gray-600 ml-4">Bicho</label>
        </div>
        <div>
          <input type="checkbox" name="fairy" id="fairy" onChange={handleCheckBox}/>
          <label htmlFor="fairy" className="text-gray-600 ml-4">Hada</label>
        </div>
        <div>
          <input type="checkbox" name="dragon" id="dragon" onChange={handleCheckBox}/>
          <label htmlFor="dragons" className="text-gray-600 ml-4">Dragon</label>
        </div>
        <div>
          <input type="checkbox" name="ghost" id="ghost" onChange={handleCheckBox}/>
          <label htmlFor="ghost" className="text-gray-600 ml-4">Fantasma</label>
        </div>
        <div>
          <input type="checkbox" name="ground" id="ground" onChange={handleCheckBox}/>
          <label htmlFor="ground" className="text-gray-600 ml-4">Tierra</label>
        </div>
        <div>
          <input type="checkbox" name="normal" id="normal" onChange={handleCheckBox}/>
          <label htmlFor="normal" className="text-gray-600 ml-4">Normal</label>
        </div>
        <div>
          <input type="checkbox" name="psychic" id="psychic" onChange={handleCheckBox}/>
          <label htmlFor="psychic" className="text-gray-600 ml-4">Psiquico</label>
        </div>
        <div>
          <input type="checkbox" name="steel" id="steel" onChange={handleCheckBox}/>
          <label htmlFor="steel" className="text-gray-600 ml-4">Acero</label>
        </div>
        <div>
          <input type="checkbox" name="shadow" id="shadow" onChange={handleCheckBox}/>
          <label htmlFor="shadow" className="text-gray-600 ml-4">Siniestro</label>
        </div>
        <div>
          <input type="checkbox" name="electric" id="electric" onChange={handleCheckBox}/>
          <label htmlFor="electric" className="text-gray-600 ml-4">Electrico </label>
        </div>
        <div>
          <input type="checkbox" name="fighting" id="fighting" onChange={handleCheckBox}/>
          <label htmlFor="fighting" className="text-gray-600 ml-4">Lucha</label>
        </div>
        <div>
          <input type="checkbox" name="flying" id="flying" onChange={handleCheckBox}/>
          <label htmlFor="flying" className="text-gray-600 ml-4">Volador</label>
        </div>
        <div>
          <input type="checkbox" name="ice" id="ice" onChange={handleCheckBox}/>
          <label htmlFor="ice" className="text-gray-600 ml-4">Hielo</label>
        </div>
        <div>
          <input type="checkbox" name="poison" id="poison" onChange={handleCheckBox}/>
          <label htmlFor="poison" className="text-gray-600 ml-4">Veneno</label>
        </div>
        <div>
          <input type="checkbox" name="rock" id="rock" onChange={handleCheckBox}/>
          <label htmlFor="rock" className="text-gray-600 ml-4">Roca</label>
        </div>
        <div>
          <input type="checkbox" name="water" id="water" onChange={handleCheckBox}/>
          <label htmlFor="water" className="text-gray-600 ml-4">Agua</label>
        </div>
      </div>
    </div>
  );
};
