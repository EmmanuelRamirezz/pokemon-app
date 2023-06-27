import { PokemonContext } from "./PokemonContext";

const PokemonProvider = ({children}) => {


  return(
    <PokemonContext.Provider value = {{
      nuero: 0
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
export default PokemonProvider;