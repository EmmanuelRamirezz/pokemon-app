import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
//import { setVisible, visible } from "../pages/Home";

export const FilterBar = () => {
  const { active, setActive, handleCheckBox, vista, setVista } = useContext(PokemonContext)
  console.log(vista);
  return (
    <div className={`fixed flex left-0 top-0 h-full w-52 flex-col bg-gray-300 items-center overflow-auto scroll-m-1 invisible${active ? 'invisible' : ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 absolute top-2 right-2 hover:cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg >
      <div className="mt-20 flex flex-col justify-center mb-8">
        <h2 className="font-bold mb-2">Visualización</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10  m-4 ml-0 hover:cursor-pointer hover:text-gray-500" onClick={() => setVista(true)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />

        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 m-4 ml-0 hover:cursor-pointer hover:text-gray-500" onClick={() => setVista(false)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      </div>
      <div className="pl-4 gap-2 flex flex-col mb-10">
        <span className="font-bold mb-4 block">Filtrar por tipo</span>
        <div>
          <input type="checkbox" name="grass" id="grass" onChange={handleCheckBox} />
          <label htmlFor="grass" className="text-gray-600 ml-4">Planta</label>
        </div>
        <div>
          <input type="checkbox" name="fire" id="fire" onChange={handleCheckBox} />
          <label htmlFor="fire" className="text-gray-600 ml-4">Fuego</label>
        </div>
        <div>
          <input type="checkbox" name="bug" id="bug" onChange={handleCheckBox} />
          <label htmlFor="bug" className="text-gray-600 ml-4">Bicho</label>
        </div>
        <div>
          <input type="checkbox" name="fairy" id="fairy" onChange={handleCheckBox} />
          <label htmlFor="fairy" className="text-gray-600 ml-4">Hada</label>
        </div>
        <div>
          <input type="checkbox" name="dragon" id="dragon" onChange={handleCheckBox} />
          <label htmlFor="dragons" className="text-gray-600 ml-4">Dragon</label>
        </div>
        <div>
          <input type="checkbox" name="ghost" id="ghost" onChange={handleCheckBox} />
          <label htmlFor="ghost" className="text-gray-600 ml-4">Fantasma</label>
        </div>
        <div>
          <input type="checkbox" name="ground" id="ground" onChange={handleCheckBox} />
          <label htmlFor="ground" className="text-gray-600 ml-4">Tierra</label>
        </div>
        <div>
          <input type="checkbox" name="normal" id="normal" onChange={handleCheckBox} />
          <label htmlFor="normal" className="text-gray-600 ml-4">Normal</label>
        </div>
        <div>
          <input type="checkbox" name="psychic" id="psychic" onChange={handleCheckBox} />
          <label htmlFor="psychic" className="text-gray-600 ml-4">Psiquico</label>
        </div>
        <div>
          <input type="checkbox" name="steel" id="steel" onChange={handleCheckBox} />
          <label htmlFor="steel" className="text-gray-600 ml-4">Acero</label>
        </div>
        <div>
          <input type="checkbox" name="electric" id="electric" onChange={handleCheckBox} />
          <label htmlFor="electric" className="text-gray-600 ml-4">Electrico </label>
        </div>
        <div>
          <input type="checkbox" name="fighting" id="fighting" onChange={handleCheckBox} />
          <label htmlFor="fighting" className="text-gray-600 ml-4">Lucha</label>
        </div>
        <div>
          <input type="checkbox" name="flying" id="flying" onChange={handleCheckBox} />
          <label htmlFor="flying" className="text-gray-600 ml-4">Volador</label>
        </div>
        <div>
          <input type="checkbox" name="ice" id="ice" onChange={handleCheckBox} />
          <label htmlFor="ice" className="text-gray-600 ml-4">Hielo</label>
        </div>
        <div>
          <input type="checkbox" name="poison" id="poison" onChange={handleCheckBox} />
          <label htmlFor="poison" className="text-gray-600 ml-4">Veneno</label>
        </div>
        <div>
          <input type="checkbox" name="rock" id="rock" onChange={handleCheckBox} />
          <label htmlFor="rock" className="text-gray-600 ml-4">Roca</label>
        </div>
        <div>
          <input type="checkbox" name="water" id="water" onChange={handleCheckBox} />
          <label htmlFor="water" className="text-gray-600 ml-4">Agua</label>
        </div>
      </div>
    </div>
  );
};
