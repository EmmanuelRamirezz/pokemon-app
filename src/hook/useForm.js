//custom hook
import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  //target hace referencia al evento destructurado
  // name hace referencia al target destructudado
  const onInputChange = ({target}) => {
    const {name, value} = target
    //propiedad computada wtf
    //otra destructuracion 
    setFormState({
      ...formState, [name]: value
    })
  }
  //solo modifica el initial form (lo reinicia)
  const onResetForm = () => {
    setFormState(initialForm)
  }
  //retorna todos los componentes del formState (desustructurado)
  //retorna el formState  (completo)
  // retorna el resultado de las 2 funciones
  return ({
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    }
  )
}