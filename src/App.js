import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LogIn from "./componants/login";
import Browser from "./componants/Browser";
import { Provider } from "react-redux";
import store from "./utills/store";
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "/browser",
    element: <Browser />,
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
