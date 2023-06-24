import {Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./src/components/Navigation";
import Home from "./src/pages/Home";
import Pokemon from "./src/pages/Pokemon";
import  Search  from "./src/pages/Search";

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element = {<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="pokemon/:id" element={<Pokemon/>}/>
        <Route path="search" element={<Search/>}/>
      </Route>

      {/* Si la ruta no encuentra nada, nos redirecciona al home */}
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
export default AppRouter;