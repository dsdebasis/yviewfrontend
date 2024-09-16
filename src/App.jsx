import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./Routes/Routes.jsx";
import ChannelContextProvider from "./Context/ContextProvider.jsx";
import VideoContextProvider from "./Context/VideoContext.jsx";
function App() {
  return (
    <ChannelContextProvider>
      <VideoContextProvider>
        <RouterProvider router={Routes} />
      </VideoContextProvider>
    </ChannelContextProvider>
  );
}

export default App;
