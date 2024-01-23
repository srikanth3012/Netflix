import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LogIn from "./componants/login";
import Browser from "./componants/Browser";
import { Provider } from "react-redux";
import store from "./utills/store";
import Play from "./componants/Play";
import Body from "./componants/Body";
import GptSearch from "./componants/GptSearch";
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Browser />,
      },
      {
        path: "/play/:id",
        element: <Play />,
      },
      {
        path: "/search",
        element: <GptSearch />,
      },
    ],
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
