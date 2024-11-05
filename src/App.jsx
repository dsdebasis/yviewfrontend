import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes.jsx";


function App() {
  return (

      <RouterProvider router={Routes} />

  );
}

export default App;
