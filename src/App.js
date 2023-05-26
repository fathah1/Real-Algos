import Home from "./pages/Home";
import AllDS from "./pages/Bridges/AllDS";
import AllAlgorithms from "./pages/Bridges/AllAlgorithms";
import BinarySearch from "./pages/AlgosExp/BinarySearch/BinarySearch";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
    path: "/",
    element: <Home/>,
    },
    {
    path: "Datastructures/",
    element: <AllDS/>,
    },
    {
    path: "Algorithms/",
    element: <AllAlgorithms/>,
    },
    {
    path: "Algorithms/BinarySearch",
    element: <BinarySearch/>,
    },
    // {
    // path: "Algorithms/",
    // element: <AllAlgorithms/>,
    // },
    // {
    // path: "Algorithms/",
    // element: <AllAlgorithms/>,
    // },
    // {
    // path: "Algorithms/",
    // element: <AllAlgorithms/>,
    // }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
